const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTHS = {
  name: 120,
  email: 254,
  subject: 180,
  message: 5000,
  language: 8,
};

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

function sanitizeText(value, maxLength) {
  return String(value || "")
    .replace(/\r/g, "")
    .trim()
    .slice(0, maxLength);
}

function isSameOrigin(request) {
  const origin = request.headers.get("Origin");

  if (!origin) {
    return true;
  }

  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

async function parsePayload(request) {
  const contentLength = Number(request.headers.get("Content-Length") || "0");

  if (contentLength > 10000) {
    return null;
  }

  try {
    return await request.json();
  } catch {
    return null;
  }
}

function buildEmailBody({name, email, subject, message, language}) {
  return [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Language: ${language}`,
    `Submitted: ${new Date().toISOString()}`,
    "",
    message,
  ].join("\n");
}

function buildEmailPayload({sender, recipient, name, email, subject, message, language}) {
  return {
    to: recipient,
    from: {
      address: sender,
      name: "alexdesroches.com",
    },
    reply_to: {
      address: email,
      name,
    },
    subject: `[alexdesroches.com] ${subject}`,
    text: buildEmailBody({name, email, subject, message, language}),
  };
}

async function sendEmail({env, payload}) {
  const accountId = sanitizeText(env.CLOUDFLARE_ACCOUNT_ID, 120);
  const apiToken = sanitizeText(env.CLOUDFLARE_EMAIL_API_TOKEN, 512);

  if (!accountId || !apiToken) {
    console.error("Contact form email is missing Cloudflare API configuration.");
    return {ok: false};
  }

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/email/sending/send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    console.error("Cloudflare Email Sending request failed.", {
      status: response.status,
      response: await response.text(),
    });
    return {ok: false};
  }

  const result = await response.json();

  if (result.success !== true) {
    console.error("Cloudflare Email Sending returned an unsuccessful response.", result);
    return {ok: false};
  }

  return {ok: true};
}

export async function onRequest({request, env}) {
  if (request.method !== "POST") {
    return jsonResponse({error: "Method not allowed."}, 405, {
      Allow: "POST",
    });
  }

  if (!isSameOrigin(request)) {
    return jsonResponse({error: "Invalid request origin."}, 403);
  }

  const payload = await parsePayload(request);

  if (!payload) {
    return jsonResponse({error: "Invalid request body."}, 400);
  }

  if (sanitizeText(payload.extraField, 100)) {
    console.info("Contact form honeypot submission skipped.");
    return jsonResponse({ok: true});
  }

  const name = sanitizeText(payload.name, MAX_FIELD_LENGTHS.name);
  const email = sanitizeText(payload.email, MAX_FIELD_LENGTHS.email).toLowerCase();
  const subject = sanitizeText(payload.subject, MAX_FIELD_LENGTHS.subject);
  const message = sanitizeText(payload.message, MAX_FIELD_LENGTHS.message);
  const language = sanitizeText(payload.language, MAX_FIELD_LENGTHS.language) || "fr";

  if (!name || !email || !subject || !message || !EMAIL_PATTERN.test(email)) {
    return jsonResponse({error: "Invalid contact form fields."}, 400);
  }

  const sender = sanitizeText(env.CONTACT_EMAIL_FROM, MAX_FIELD_LENGTHS.email).toLowerCase();
  const recipient = sanitizeText(
    env.CONTACT_EMAIL_TO || "alex.desroches7@gmail.com",
    MAX_FIELD_LENGTHS.email,
  ).toLowerCase();

  if (!EMAIL_PATTERN.test(sender) || !EMAIL_PATTERN.test(recipient)) {
    return jsonResponse({error: "Contact email is not configured."}, 500);
  }

  try {
    const sent = await sendEmail({
      env,
      payload: buildEmailPayload({
        sender,
        recipient,
        name,
        email,
        subject,
        message,
        language,
      }),
    });

    if (!sent.ok) {
      return jsonResponse({error: "Email could not be sent."}, 502);
    }
  } catch {
    return jsonResponse({error: "Email could not be sent."}, 502);
  }

  return jsonResponse({ok: true});
}
