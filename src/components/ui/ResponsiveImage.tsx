import Image from "next/image";

const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  maxWidth,
  maxHeight,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  maxWidth?: string;
  maxHeight?: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        maxWidth: maxWidth || "100%",
        maxHeight: maxHeight || "100%",
      }}
    />
  );
};

export default ResponsiveImage;
