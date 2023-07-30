import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default12.module.css";

type Property1Default12Type = {
  modelFile?: string;

  /** Style props */
  property1DefaultWidth?: Property.Width;
  property1DefaultHeight?: Property.Height;
  property1DefaultBackground?: Property.Background;
  rectangleDivBackgroundColor?: Property.BackgroundColor;
  rectangleDivBackground?: Property.Background;
  modelFileLeft?: Property.Left;
  modelFileLineHeight?: Property.LineHeight;
};

const Property1Default12: FunctionComponent<Property1Default12Type> = ({
  modelFile,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultBackground,
  rectangleDivBackgroundColor,
  rectangleDivBackground,
  modelFileLeft,
  modelFileLineHeight,
}) => {
  const property1Default12Style: CSS.Properties = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      background: property1DefaultBackground,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultBackground,
  ]);

  const rectangleDiv5Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
      background: rectangleDivBackground,
    };
  }, [rectangleDivBackgroundColor, rectangleDivBackground]);

  const modelFileStyle: CSS.Properties = useMemo(() => {
    return {
      left: modelFileLeft,
      lineHeight: modelFileLineHeight,
    };
  }, [modelFileLeft, modelFileLineHeight]);

  return (
    <div className={styles.property1default} style={property1Default12Style}>
      <div
        className={styles.property1defaultChild}
        style={rectangleDiv5Style}
      />
      <div className={styles.modelFile} style={modelFileStyle}>
        {modelFile}
      </div>
    </div>
  );
};

export default Property1Default12;
