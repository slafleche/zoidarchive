import * as NextImage from "next/image";
import markupStyles from "styles/markupStyles.css";
import { useEffect, useState } from "react";
import classNames from "classnames";
import utilityStyles from "styles/utilities.css";
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
  console.log("imageMeta: ", imageData);
  const metaData = imageData[src];

  return (
    <NextImage.default
      src={src}
      layout="responsive"
      width={metaData.width}
      height={metaData.height}
      alt={alt}
      title={title}
      className={markupStyles.mdxImage}
    />
  );
};

export default Image;
