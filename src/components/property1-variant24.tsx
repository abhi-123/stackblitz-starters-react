import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-variant24.module.css";

type Property1Variant24Type = {
  /** Style props */
  property1Variant2Width?: Property.Width;
  property1Variant2Height?: Property.Height;
  ellipseDivTop?: Property.Top;
  ellipseDivLeft?: Property.Left;
  ellipseDivWidth?: Property.Width;
  ellipseDivHeight?: Property.Height;
  modelIsRiggedTop?: Property.Top;
  modelIsRiggedLeft?: Property.Left;
  modelIsRiggedLineHeight?: Property.LineHeight;
};

const Property1Variant24: FunctionComponent<Property1Variant24Type> = ({
  property1Variant2Width,
  property1Variant2Height,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivWidth,
  ellipseDivHeight,
  modelIsRiggedTop,
  modelIsRiggedLeft,
  modelIsRiggedLineHeight,
}) => {
  const property1Variant24Style: CSS.Properties = useMemo(() => {
    return {
      width: property1Variant2Width,
      height: property1Variant2Height,
    };
  }, [property1Variant2Width, property1Variant2Height]);

  const ellipseDiv4Style: CSS.Properties = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivTop, ellipseDivLeft, ellipseDivWidth, ellipseDivHeight]);

  const modelIsRiggedStyle: CSS.Properties = useMemo(() => {
    return {
      top: modelIsRiggedTop,
      left: modelIsRiggedLeft,
      lineHeight: modelIsRiggedLineHeight,
    };
  }, [modelIsRiggedTop, modelIsRiggedLeft, modelIsRiggedLineHeight]);

  return (
    <div className={styles.property1variant2} style={property1Variant24Style}>
      <div className={styles.property1variant2Child} />
      <div className={styles.property1variant2Item} style={ellipseDiv4Style} />
      <div
        className={styles.modelIsRigged}
        style={modelIsRiggedStyle}
      >{`Model is Rigged `}</div>
    </div>
  );
};

export default Property1Variant24;
