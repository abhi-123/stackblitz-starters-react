import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default4.module.css";

type Property1Default4Type = {
  /** Style props */
  property1DefaultPosition?: Property.Position;
  property1DefaultWidth?: Property.Width;
  property1DefaultHeight?: Property.Height;
  property1DefaultTop?: Property.Top;
  property1DefaultLeft?: Property.Left;
  multiSelectLineHeight?: Property.LineHeight;
};

const Property1Default4: FunctionComponent<Property1Default4Type> = ({
  property1DefaultPosition,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultTop,
  property1DefaultLeft,
  multiSelectLineHeight,
}) => {
  const property1Default4Style: CSS.Properties = useMemo(() => {
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

  const multiSelectStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: multiSelectLineHeight,
    };
  }, [multiSelectLineHeight]);

  return (
    <div className={styles.property1default} style={property1Default4Style}>
      <div className={styles.property1defaultChild} />
      <img className={styles.icon} alt="" src="/icon.svg" />
      <div className={styles.multiSelect} style={multiSelectStyle}>
        multi-select
      </div>
    </div>
  );
};

export default Property1Default4;
