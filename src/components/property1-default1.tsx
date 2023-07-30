import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default1.module.css";

type Property1Default1Type = {
  /** Style props */
  property1DefaultPosition?: Property.Position;
  property1DefaultWidth?: Property.Width;
  property1DefaultHeight?: Property.Height;
  property1DefaultTop?: Property.Top;
  property1DefaultLeft?: Property.Left;
  divLineHeight?: Property.LineHeight;
};

const Property1Default1: FunctionComponent<Property1Default1Type> = ({
  property1DefaultPosition,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultTop,
  property1DefaultLeft,
  divLineHeight,
}) => {
  const property1Default1Style: CSS.Properties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultPosition,
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const div2Style: CSS.Properties = useMemo(() => {
    return {
      lineHeight: divLineHeight,
    };
  }, [divLineHeight]);

  return (
    <div className={styles.property1default} style={property1Default1Style}>
      <div className={styles.div} style={div2Style}>
        1
      </div>
      <div className={styles.property1defaultChild} />
    </div>
  );
};

export default Property1Default1;
