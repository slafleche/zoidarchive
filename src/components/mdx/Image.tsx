import * as NextImage from "next/image";
import { useEffect, useState } from "react";
import markupStyles from "styles/markup.css";

interface IProps {
  title: string;
  src: string;
  alt: string;
}

interface IImageProps {
  width: string;
  height: string;
}

export default function Image(props: IProps) {
  const { src, title, alt } = props;
  const [imageMeta, setImageMeta] = useState<IImageProps>();

  useEffect(
    function imageDimensions() {
      const img = new (Image as any)();
      img.addEventListener("load", function () {
        setImageMeta({
          width: this.naturalWidth,
          height: this.naturalHeight,
        });
      });
    },
    [src]
  );

  if (!imageMeta) {
    return null;
  }
  return (
    <NextImage.default
      src={src}
      width={imageMeta.width as string}
      height={imageMeta.height as string}
      alt={alt}
      title={title}
      className={markupStyles.responsiveImage}
    />
  );
}
