// Without a `sizes` attribute the browser assumes 100vw and over-fetches the
// desktop source on narrow viewports. Content images live in .max-text-width
// (max-width 630px, border-box, padded by --page-padding), so they render at
// 630-2*4rem = 502px above 1024px, 630-2*2rem = 566px down to 1024px, and
// 100vw-2rem below 500px. The last branch declares 501px rather than 502px so
// that a 1x display matches the 501w source exactly instead of rounding up to
// the 1002w one; the 1px shortfall is imperceptible. Pass `sizes` for anything
// laid out differently, such as the fixed-size signature.
const CONTENT_IMAGE_SIZES = "(max-width: 500px) calc(100vw - 2rem), (max-width: 1024px) 566px, 501px";

export default function ResponsiveImage(
  {
    path,
    alt,
    renderedWidth,
    renderedHeight,
    desktopWidth,
    mobileWidth,
    className,
    mobilePath,
    fallbackExtension = "jpg",
    sizes = CONTENT_IMAGE_SIZES,
    // Omitted by default so the preload scanner can start the fetch during HTML
    // parse. On the contact and about pages this image sits beside the <h1> and
    // is the LCP element, and lazy-loading it there would delay the fetch until
    // layout. Callers below the fold opt in with loading="lazy".
    loading,
  }
) {
  const resolvedMobilePath = mobilePath || `${path}-${mobileWidth}w`;

  return (
    <picture>
      <source
        srcSet={`${path}.avif ${desktopWidth}w, ${resolvedMobilePath}.avif ${mobileWidth}w`}
        sizes={sizes}
        type="image/avif"
      />
      <source
        srcSet={`${path}.webp ${desktopWidth}w, ${resolvedMobilePath}.webp ${mobileWidth}w`}
        sizes={sizes}
        type="image/webp"
      />
      <img
        srcSet={`${path}.${fallbackExtension} ${desktopWidth}w, ${resolvedMobilePath}.${fallbackExtension} ${mobileWidth}w`}
        sizes={sizes}
        src={`${path}.${fallbackExtension}`}
        alt={alt}
        width={renderedWidth}
        height={renderedHeight}
        loading={loading}
        decoding="async"
        className={className || ""}
      />
    </picture>
  );
}

