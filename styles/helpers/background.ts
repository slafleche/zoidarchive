import * as csstype from "csstype";

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

  if (image.startsWith("linear-gradient(")) {
    return image;
  }

  // Fallback to a general asset URL.
  return `url(${image})`;
};

export const backgroundHelper = (props: IBackground) => {
  let styles = {
    backgroundPosition: props.position || `50% 50%`,
    backgroundRepeat: props.repeat || "no-repeat",
    backgroundImage: getBackgroundImage(props.image),
  };

  if (props.size) {
    styles["background-size"] = props.size;
  }

  if (props.color) {
    styles["background-color"] = props.color;
  }

  if (props.attachment) {
    styles["background-attachment"] = props.attachment;
  }

  if (props.opacity) {
    styles["opacity"] = props.opacity;
  }

  return styles;
};

export const objectFitWithFallback = () => {
  return {
    position: "absolute" as csstype.Property.Position,
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
