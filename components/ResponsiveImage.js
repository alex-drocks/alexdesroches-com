export default function ResponsiveImage(
  {
    path,
    alt,
    renderedWidth,
    renderedHeight,
    desktopWidth,
    mobileWidth,
    className
  }
) {
  return (
    <picture>
      <source
        srcSet={`${path}.avif ${desktopWidth}w, ${path}-${mobileWidth}w.avif ${mobileWidth}w`}
        type="image/avif"
      />
      <source
        srcSet={`${path}.webp ${desktopWidth}w, ${path}-${mobileWidth}w.webp ${mobileWidth}w`}
        type="image/webp"
      />
      <img
        srcSet={`${path}.jpg ${desktopWidth}w, ${path}-${mobileWidth}w.jpg`}
        src={`${path}.jpg`}
        alt={alt}
        width={renderedWidth}
        height={renderedHeight}
        className={className || ""}
      />
    </picture>
  )
}

