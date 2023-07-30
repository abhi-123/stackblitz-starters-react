import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-variant25.module.css";

type Property1Variant25Type = {
  /** Style props */
  property1Variant2Width?: Property.Width;
  property1Variant2Height?: Property.Height;
  ellipseDivTop?: Property.Top;
  ellipseDivLeft?: Property.Left;
  ellipseDivWidth?: Property.Width;
  ellipseDivHeight?: Property.Height;
  isAnimatedTop?: Property.Top;
  isAnimatedLeft?: Property.Left;
  isAnimatedLineHeight?: Property.LineHeight;
};

const Property1Variant25: FunctionComponent<Property1Variant25Type> = ({
  property1Variant2Width,
  property1Variant2Height,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivWidth,
  ellipseDivHeight,
  isAnimatedTop,
  isAnimatedLeft,
  isAnimatedLineHeight,
}) => {
  const property1Variant25Style: CSS.Properties = useMemo(() => {
    return {
      width: property1Variant2Width,
      height: property1Variant2Height,
    };
  }, [property1Variant2Width, property1Variant2Height]);

  const ellipseDiv5Style: CSS.Properties = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivTop, ellipseDivLeft, ellipseDivWidth, ellipseDivHeight]);

  const isAnimatedStyle: CSS.Properties = useMemo(() => {
    return {
      top: isAnimatedTop,
      left: isAnimatedLeft,
      lineHeight: isAnimatedLineHeight,
    };
  }, [isAnimatedTop, isAnimatedLeft, isAnimatedLineHeight]);

  return (
    <div className={styles.property1variant2} style={property1Variant25Style}>
      <div className={styles.property1variant2Child} />
      <div className={styles.property1variant2Item} style={ellipseDiv5Style} />
      <div className={styles.isAnimated} style={isAnimatedStyle}>
        Is Animated
      </div>
    </div>
  );
};

export default Property1Variant25;
