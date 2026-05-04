import {createServer} from "node:http";
import {createReadStream} from "node:fs";
import {access, stat} from "node:fs/promises";
import path from "node:path";

const rootArg = process.argv[2] || "out";
const root = path.resolve(process.cwd(), rootArg);
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

try {
  await access(root);
} catch {
  console.error(`Static export not found: ${root}`);
  console.error("Run `bun run build` before `bun run preview`.");
  process.exit(1);
}

createServer(async (request, response) => {
  const requestedPath = getRequestedPath(request.url);
  const filePath = await resolveFilePath(requestedPath);

  if (!filePath) {
    await sendFile(response, path.join(root, "404.html"), 404);
    return;
  }

  await sendFile(response, filePath);
}).listen(port, host, () => {
  console.log(`Serving ${rootArg}/ at http://localhost:${port}`);
});

function getRequestedPath(url = "/") {
  try {
    const {pathname} = new URL(url, "http://localhost");
    return decodeURIComponent(pathname);
  } catch {
    return "/";
  }
}

async function resolveFilePath(requestedPath) {
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const fullPath = path.join(root, safePath);

  if (!isInsideRoot(fullPath)) {
    return null;
  }

  const stats = await getStats(fullPath);

  if (stats?.isDirectory()) {
    const indexPath = path.join(fullPath, "index.html");
    return (await getStats(indexPath))?.isFile() ? indexPath : null;
  }

  return stats?.isFile() ? fullPath : null;
}

function isInsideRoot(filePath) {
  const relativePath = path.relative(root, filePath);
  return relativePath === "" || (!relativePath.startsWith("..") && !path.isAbsolute(relativePath));
}

async function getStats(filePath) {
  try {
    return await stat(filePath);
  } catch {
    return null;
  }
}

async function sendFile(response, filePath, statusCode = 200) {
  const stats = await getStats(filePath);

  if (!stats?.isFile()) {
    response.writeHead(statusCode, {"Content-Type": "text/plain; charset=utf-8"});
    response.end("Not found");
    return;
  }

  response.writeHead(statusCode, {
    "Content-Length": stats.size,
    "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
}
