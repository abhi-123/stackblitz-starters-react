import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-variant23.module.css";

type Property1Variant23Type = {
  /** Style props */
  property1Variant2Width?: Property.Width;
  property1Variant2Height?: Property.Height;
  ellipseDivTop?: Property.Top;
  ellipseDivLeft?: Property.Left;
  ellipseDivWidth?: Property.Width;
  ellipseDivHeight?: Property.Height;
  hasUVMappingTop?: Property.Top;
  hasUVMappingLeft?: Property.Left;
  hasUVMappingLineHeight?: Property.LineHeight;
};

const Property1Variant23: FunctionComponent<Property1Variant23Type> = ({
  property1Variant2Width,
  property1Variant2Height,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivWidth,
  ellipseDivHeight,
  hasUVMappingTop,
  hasUVMappingLeft,
  hasUVMappingLineHeight,
}) => {
  const property1Variant23Style: CSS.Properties = useMemo(() => {
    return {
      width: property1Variant2Width,
      height: property1Variant2Height,
    };
  }, [property1Variant2Width, property1Variant2Height]);

  const ellipseDiv2Style: CSS.Properties = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivTop, ellipseDivLeft, ellipseDivWidth, ellipseDivHeight]);

  const hasUVMappingStyle: CSS.Properties = useMemo(() => {
    return {
      top: hasUVMappingTop,
      left: hasUVMappingLeft,
      lineHeight: hasUVMappingLineHeight,
    };
  }, [hasUVMappingTop, hasUVMappingLeft, hasUVMappingLineHeight]);

  return (
    <div className={styles.property1variant2} style={property1Variant23Style}>
      <div className={styles.property1variant2Child} />
      <div className={styles.property1variant2Item} style={ellipseDiv2Style} />
      <div className={styles.hasUvMapping} style={hasUVMappingStyle}>
        Has UV Mapping
      </div>
    </div>
  );
};

export default Property1Variant23;
