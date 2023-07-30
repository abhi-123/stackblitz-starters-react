import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default7.module.css";

type Property1Default7Type = {
  /** Style props */
  property1DefaultPosition?: Property.Position;
  property1DefaultTop?: Property.Top;
  property1DefaultLeft?: Property.Left;
  property1DefaultWidth?: Property.Width;
  property1DefaultHeight?: Property.Height;
  selectTypeLineHeight?: Property.LineHeight;
};

const Property1Default7: FunctionComponent<Property1Default7Type> = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  property1DefaultHeight,
  selectTypeLineHeight,
}) => {
  const property1Default7Style: CSS.Properties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      width: property1DefaultWidth,
      height: property1DefaultHeight,
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
    property1DefaultHeight,
  ]);

  const selectTypeStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: selectTypeLineHeight,
    };
  }, [selectTypeLineHeight]);

  return (
    <div className={styles.property1default} style={property1Default7Style}>
      <div className={styles.property1defaultChild} />
      <img className={styles.icon} alt="" src="/icon.svg" />
      <div className={styles.selectType} style={selectTypeStyle}>
        select type
      </div>
    </div>
  );
};

export default Property1Default7;
