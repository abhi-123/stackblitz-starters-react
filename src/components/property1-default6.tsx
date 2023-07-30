import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default6.module.css";

type Property1Default6Type = {
  singleSelect?: string;

  /** Style props */
  property1DefaultWidth?: Property.Width;
  property1DefaultHeight?: Property.Height;
  singleSelectLeft?: Property.Left;
  singleSelectLineHeight?: Property.LineHeight;
};

const Property1Default6: FunctionComponent<Property1Default6Type> = ({
  singleSelect,
  property1DefaultWidth,
  property1DefaultHeight,
  singleSelectLeft,
  singleSelectLineHeight,
}) => {
  const property1Default6Style: CSS.Properties = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
    };
  }, [property1DefaultWidth, property1DefaultHeight]);

  const singleSelectStyle: CSS.Properties = useMemo(() => {
    return {
      left: singleSelectLeft,
      lineHeight: singleSelectLineHeight,
    };
  }, [singleSelectLeft, singleSelectLineHeight]);

  return (
    <div className={styles.property1default} style={property1Default6Style}>
      <div className={styles.property1defaultChild} />
      <img className={styles.icon} alt="" src="/icon.svg" />
      <div className={styles.singleSelect} style={singleSelectStyle}>
        {singleSelect}
      </div>
    </div>
  );
};

export default Property1Default6;
