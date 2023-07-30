import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default9.module.css";

type Property1Default9Type = {
  icon?: string;

  /** Style props */
  property1DefaultWidth?: Property.Width;
  property1DefaultHeight?: Property.Height;
  selectUseLineHeight?: Property.LineHeight;
};

const Property1Default9: FunctionComponent<Property1Default9Type> = ({
  icon,
  property1DefaultWidth,
  property1DefaultHeight,
  selectUseLineHeight,
}) => {
  const property1Default9Style: CSS.Properties = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
    };
  }, [property1DefaultWidth, property1DefaultHeight]);

  const selectUseStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: selectUseLineHeight,
    };
  }, [selectUseLineHeight]);

  return (
    <div className={styles.property1default} style={property1Default9Style}>
      <div className={styles.property1defaultChild} />
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.selectUse} style={selectUseStyle}>
        select use
      </div>
    </div>
  );
};

export default Property1Default9;
