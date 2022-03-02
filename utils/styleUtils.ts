// import {
//   important,
//   percent,
//   px,
//   quote,
//   url,
//   viewHeight,
//   viewWidth,
//   ColorHelper,
// } from "csx";

// export type ColorValues = ColorHelper | undefined;

export const utilVars = {
  black: "#000",
  white: "#FFF",
};

import * as CSS from "csstype";

export interface IBackground {
  color?: CSS.Property.BackgroundColor;
  attachment?: CSS.Property.BackgroundAttachment;
  position?: CSS.Property.Position;
  repeat?: CSS.Property.BackgroundRepeat;
  size?: CSS.Property.BackgroundSize;
  image?: CSS.Property.BackgroundImage;
  fallbackImage?: CSS.Property.BackgroundImage;
  opacity?: CSS.Property.Opacity;
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

export const getBackgroundImage = (image?: CSS.Property.BackgroundImage) => {
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
    position: "absolute" as CSS.Property.BackgroundPosition,
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
        objectFit: "cover" as CSS.Property.ObjectFit,
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

export function centeredBackgroundProps() {
  return {
    backgroundPosition: `50% 50%`,
    backgroundRepeat: "no-repeat",
  };
}

export function centeredBackground() {
  //   const style = styleFactory("centeredBackground");
  //   return style(centeredBackgroundProps());
  return {};
}
