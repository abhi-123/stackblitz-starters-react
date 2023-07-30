import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default3.module.css";

type Property1Default3Type = {
  /** Style props */
  property1DefaultWidth?: Property.Width;
  property1DefaultHeight?: Property.Height;
  property1DefaultPosition?: Property.Position;
  property1DefaultTop?: Property.Top;
  property1DefaultLeft?: Property.Left;
  iWouldNotLineHeight?: Property.LineHeight;
};

const Property1Default3: FunctionComponent<Property1Default3Type> = ({
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  iWouldNotLineHeight,
}) => {
  const property1Default3Style: CSS.Properties = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const iWouldNotStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: iWouldNotLineHeight,
    };
  }, [iWouldNotLineHeight]);

  return (
    <div className={styles.property1default} style={property1Default3Style}>
      <div className={styles.iWouldNot} style={iWouldNotStyle}>
        I would not like to sign up to sell on the BIOS Platform
      </div>
      <div className={styles.property1defaultChild} />
    </div>
  );
};

export default Property1Default3;
