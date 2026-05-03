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
  }
) {
  const resolvedMobilePath = mobilePath || `${path}-${mobileWidth}w`;

  return (
    <picture>
      <source
        srcSet={`${path}.avif ${desktopWidth}w, ${resolvedMobilePath}.avif ${mobileWidth}w`}
        type="image/avif"
      />
      <source
        srcSet={`${path}.webp ${desktopWidth}w, ${resolvedMobilePath}.webp ${mobileWidth}w`}
        type="image/webp"
      />
      <img
        srcSet={`${path}.${fallbackExtension} ${desktopWidth}w, ${resolvedMobilePath}.${fallbackExtension} ${mobileWidth}w`}
        src={`${path}.${fallbackExtension}`}
        alt={alt}
        width={renderedWidth}
        height={renderedHeight}
        className={className || ""}
      />
    </picture>
  );
}

