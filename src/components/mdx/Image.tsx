import * as NextImage from "next/image";
import markupStyles from "styles/markupStyles.css";
import { imageData } from "src/meta/imageData";

interface IProps {
  title: string;
  src: string;
  alt: string;
}

export interface IImageMeta {
  width: Number;
  height: Number;
  ratio: string;
}

export interface IImageDictionary {
  [key: string]: IImageMeta;
}

interface IImageProps {
  width: number;
  height: number;
}

const Image = (props: IProps) => {
  const { src, title, alt } = props || {};
  const metaData = imageData[src];

  return (
    <div
      className={markupStyles.mdxImageFrame}
      style={{
        paddingTop: `${metaData.ratio * 100}%`,
      }}
    >
      <NextImage.default
        src={src}
        layout="responsive"
        width={metaData.width}
        height={metaData.height}
        alt={alt}
        title={title}
        className={markupStyles.mdxImage}
      />
    </div>
  );
};

export default Image;
