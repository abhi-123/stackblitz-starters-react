import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default2.module.css";

type Property1Default2Type = {
  /** Style props */
  property1DefaultPosition?: Property.Position;
  property1DefaultWidth?: Property.Width;
  property1DefaultHeight?: Property.Height;
  property1DefaultTop?: Property.Top;
  property1DefaultLeft?: Property.Left;
  selectLineHeight?: Property.LineHeight;
};

const Property1Default2: FunctionComponent<Property1Default2Type> = ({
  property1DefaultPosition,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultTop,
  property1DefaultLeft,
  selectLineHeight,
}) => {
  const property1Default2Style: CSS.Properties = useMemo(() => {
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

  const selectStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: selectLineHeight,
    };
  }, [selectLineHeight]);

  return (
    <div className={styles.property1default} style={property1Default2Style}>
      <div className={styles.property1defaultChild} />
      <img className={styles.icon} alt="" src="/icon.svg" />
      <div className={styles.select} style={selectStyle}>
        select
      </div>
    </div>
  );
};

export default Property1Default2;
