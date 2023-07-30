import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default8.module.css";

type Property1Default8Type = {
  /** Style props */
  property1DefaultWidth?: Property.Width;
  property1DefaultHeight?: Property.Height;
  ellipseDivTop?: Property.Top;
  ellipseDivLeft?: Property.Left;
  ellipseDivWidth?: Property.Width;
  ellipseDivHeight?: Property.Height;
  aINotUsedTop?: Property.Top;
  aINotUsedLeft?: Property.Left;
  aINotUsedLineHeight?: Property.LineHeight;
};

const Property1Default8: FunctionComponent<Property1Default8Type> = ({
  property1DefaultWidth,
  property1DefaultHeight,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivWidth,
  ellipseDivHeight,
  aINotUsedTop,
  aINotUsedLeft,
  aINotUsedLineHeight,
}) => {
  const property1Default8Style: CSS.Properties = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
    };
  }, [property1DefaultWidth, property1DefaultHeight]);

  const ellipseDiv3Style: CSS.Properties = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivTop, ellipseDivLeft, ellipseDivWidth, ellipseDivHeight]);

  const aINotUsedStyle: CSS.Properties = useMemo(() => {
    return {
      top: aINotUsedTop,
      left: aINotUsedLeft,
      lineHeight: aINotUsedLineHeight,
    };
  }, [aINotUsedTop, aINotUsedLeft, aINotUsedLineHeight]);

  return (
    <div className={styles.property1default} style={property1Default8Style}>
      <div className={styles.property1defaultChild} />
      <div className={styles.property1defaultItem} style={ellipseDiv3Style} />
      <div className={styles.aiNotUsed} style={aINotUsedStyle}>
        AI Not Used
      </div>
    </div>
  );
};

export default Property1Default8;
