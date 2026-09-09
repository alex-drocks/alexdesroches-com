// Match .max-text-width. The 1px offset avoids rounding up to the larger image.
const CONTENT_IMAGE_SIZES = "(max-width: 500px) calc(100vw - 2rem), (max-width: 630px) calc(100vw - 4rem), (max-width: 1024px) calc(630px - 4rem), calc(629px - 8rem)";

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

