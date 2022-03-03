import chroma from "chroma-js";

export const utilVars = {
  black: chroma("#000"),
  white: chroma("#FFF"),
};

import * as csstype from "csstype";
import { isNumeric } from "../src/utils/utils";

export interface IBackground {
  color?: csstype.Property.BackgroundColor;
  attachment?: csstype.Property.BackgroundAttachment;
  position?: csstype.Property.Position;
  repeat?: csstype.Property.BackgroundRepeat;
  size?: csstype.Property.BackgroundSize;
  image?: csstype.Property.BackgroundImage;
  fallbackImage?: csstype.Property.BackgroundImage;
  opacity?: csstype.Property.Opacity;
}

export const EMPTY_BACKGROUND: IBackground = {
  color: undefined,
  attachment: undefined,
  position: undefined,
  repeat: undefined,
  size: undefined,
  image: undefined,
  opacity: undefined,
};

export const getBackgroundImage = (
  image?: csstype.Property.BackgroundImage
) => {
  if (!image) {
    return undefined;
  }
  image = image.toString();

  if (image.startsWith("data:image/")) {
    return `url(${image})`;
  }

  if (image.startsWith("linear-gradient(")) {
    return image;
  }

  // Fallback to a general asset URL.
  return `url(${image})`;
};

export const backgroundHelper = (props: IBackground) => {
  const image = getBackgroundImage(props.image);
  return {
    backgroundColor: props.color ? props.color : undefined,
    backgroundAttachment: props.attachment || undefined,
    backgroundPosition: props.position || `50% 50%`,
    backgroundRepeat: props.repeat || "no-repeat",
    backgroundSize: props.size || "cover",
    backgroundImage: image,
    opacity: props.opacity ?? undefined,
  };
};

export const objectFitWithFallback = () => {
  return {
    position: "absolute" as csstype.Property.BackgroundPosition,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
    height: "auto",
    width: "100%",
    $nest: {
      "@supports (object-fit: cover)": {
        position: "relative !important",
        objectFit: "cover" as csstype.Property.ObjectFit,
        objectPosition: "center",
        height: "100% !important",
      },
    },
  };
};

export function fakeBackgroundFixed() {
  return {
    content: "",
    display: "block",
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100vw",
    height: "100vh",
  };
}

export function centeredBackground(image: csstype.Property.BackgroundImage) {
  return {
    backgroundSize: "cover",
    backgroundPosition: `50% 50%`,
    backgroundRepeat: "no-repeat",
    backgroundImage: getBackgroundImage(image),
  };
}

export const unit = (
  val: string | number | undefined
  //   options?: {
  //     isImportant?: boolean;
  //   }
) => {
  //   const { isImportant = false } = options || {};

  if (typeof val === "object") {
    console.log(
      `You cannot pass objects (${JSON.stringify(val)}) to the "unit" function`
    );
    return undefined;
  }

  if (val === undefined) {
    return undefined;
  }

  const valIsNumeric = isNumeric(val.toString().trim());

  let output;

  if (typeof val === "string" && !valIsNumeric) {
    output = val;
  } else if (val !== undefined && val !== null && valIsNumeric) {
    output = `${val} px`;
  } else {
    output = val;
  }

  //   if (isImportant) {
  //     return important(output);
  //   } else {
  //     return output;
  //   }
  return output;
};
