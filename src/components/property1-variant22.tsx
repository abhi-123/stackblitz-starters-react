import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-variant22.module.css";

type Property1Variant22Type = {
  /** Style props */
  property1Variant2Position?: Property.Position;
  property1Variant2Width?: Property.Width;
  property1Variant2Height?: Property.Height;
  property1Variant2Top?: Property.Top;
  property1Variant2Left?: Property.Left;
  property1Variant2BoxShadow?: Property.BoxShadow;
  ellipseDivTop?: Property.Top;
  ellipseDivLeft?: Property.Left;
  ellipseDivWidth?: Property.Width;
  ellipseDivHeight?: Property.Height;
  visibleToPublicTop?: Property.Top;
  visibleToPublicLeft?: Property.Left;
  visibleToPublicLineHeight?: Property.LineHeight;
};

const Property1Variant22: FunctionComponent<Property1Variant22Type> = ({
  property1Variant2Position,
  property1Variant2Width,
  property1Variant2Height,
  property1Variant2Top,
  property1Variant2Left,
  property1Variant2BoxShadow,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivWidth,
  ellipseDivHeight,
  visibleToPublicTop,
  visibleToPublicLeft,
  visibleToPublicLineHeight,
}) => {
  const property1Variant22Style: CSS.Properties = useMemo(() => {
    return {
      position: property1Variant2Position,
      width: property1Variant2Width,
      height: property1Variant2Height,
      top: property1Variant2Top,
      left: property1Variant2Left,
      boxShadow: property1Variant2BoxShadow,
    };
  }, [
    property1Variant2Position,
    property1Variant2Width,
    property1Variant2Height,
    property1Variant2Top,
    property1Variant2Left,
    property1Variant2BoxShadow,
  ]);

  const ellipseDiv1Style: CSS.Properties = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivTop, ellipseDivLeft, ellipseDivWidth, ellipseDivHeight]);

  const visibleToPublicStyle: CSS.Properties = useMemo(() => {
    return {
      top: visibleToPublicTop,
      left: visibleToPublicLeft,
      lineHeight: visibleToPublicLineHeight,
    };
  }, [visibleToPublicTop, visibleToPublicLeft, visibleToPublicLineHeight]);

  return (
    <div className={styles.property1variant2} style={property1Variant22Style}>
      <div className={styles.property1variant2Child} />
      <div className={styles.property1variant2Item} style={ellipseDiv1Style} />
      <div className={styles.visibleToPublic} style={visibleToPublicStyle}>
        visible to public
      </div>
    </div>
  );
};

export default Property1Variant22;
