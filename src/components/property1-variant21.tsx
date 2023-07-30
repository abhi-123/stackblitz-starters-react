import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-variant21.module.css";

type Property1Variant21Type = {
  iWouldLikeToBeAnAffiliate?: string;

  /** Style props */
  property1Variant2Width?: Property.Width;
  property1Variant2Height?: Property.Height;
  property1Variant2Position?: Property.Position;
  property1Variant2Top?: Property.Top;
  property1Variant2Left?: Property.Left;
  iWouldLikeLineHeight?: Property.LineHeight;
  iWouldLikeTop?: Property.Top;
  iWouldLikeLeft?: Property.Left;
  rectangleDivWidth?: Property.Width;
  rectangleDivTop?: Property.Top;
  rectangleDivRight?: Property.Right;
  rectangleDivBottom?: Property.Bottom;
  rectangleDivBackgroundColor?: Property.BackgroundColor;
};

const Property1Variant21: FunctionComponent<Property1Variant21Type> = ({
  iWouldLikeToBeAnAffiliate,
  property1Variant2Width,
  property1Variant2Height,
  property1Variant2Position,
  property1Variant2Top,
  property1Variant2Left,
  iWouldLikeLineHeight,
  iWouldLikeTop,
  iWouldLikeLeft,
  rectangleDivWidth,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivBackgroundColor,
}) => {
  const property1Variant21Style: CSS.Properties = useMemo(() => {
    return {
      width: property1Variant2Width,
      height: property1Variant2Height,
      position: property1Variant2Position,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [
    property1Variant2Width,
    property1Variant2Height,
    property1Variant2Position,
    property1Variant2Top,
    property1Variant2Left,
  ]);

  const iWouldLikeStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: iWouldLikeLineHeight,
      top: iWouldLikeTop,
      left: iWouldLikeLeft,
    };
  }, [iWouldLikeLineHeight, iWouldLikeTop, iWouldLikeLeft]);

  const rectangleDiv3Style: CSS.Properties = useMemo(() => {
    return {
      width: rectangleDivWidth,
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [
    rectangleDivWidth,
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivBackgroundColor,
  ]);

  return (
    <div className={styles.property1variant2} style={property1Variant21Style}>
      <div className={styles.iWouldLike} style={iWouldLikeStyle}>
        {iWouldLikeToBeAnAffiliate}
      </div>
      <div
        className={styles.property1variant2Child}
        style={rectangleDiv3Style}
      />
    </div>
  );
};

export default Property1Variant21;
