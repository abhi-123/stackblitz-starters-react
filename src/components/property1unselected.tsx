import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1unselected.module.css";

type Property1unselectedType = {
  no?: string;

  /** Style props */
  property1unselectedPosition?: Property.Position;
  property1unselectedWidth?: Property.Width;
  property1unselectedHeight?: Property.Height;
  property1unselectedPadding?: Property.Padding;
  property1unselectedTop?: Property.Top;
  property1unselectedLeft?: Property.Left;
  property1unselectedBackgroundColor?: Property.BackgroundColor;
  noLineHeight?: Property.LineHeight;
};

const Property1unselected: FunctionComponent<Property1unselectedType> = ({
  no,
  property1unselectedPosition,
  property1unselectedWidth,
  property1unselectedHeight,
  property1unselectedPadding,
  property1unselectedTop,
  property1unselectedLeft,
  property1unselectedBackgroundColor,
  noLineHeight,
}) => {
  const property1unselectedStyle: CSS.Properties = useMemo(() => {
    return {
      position: property1unselectedPosition,
      width: property1unselectedWidth,
      height: property1unselectedHeight,
      padding: property1unselectedPadding,
      top: property1unselectedTop,
      left: property1unselectedLeft,
      backgroundColor: property1unselectedBackgroundColor,
    };
  }, [
    property1unselectedPosition,
    property1unselectedWidth,
    property1unselectedHeight,
    property1unselectedPadding,
    property1unselectedTop,
    property1unselectedLeft,
    property1unselectedBackgroundColor,
  ]);

  const noStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: noLineHeight,
    };
  }, [noLineHeight]);

  return (
    <div
      className={styles.property1unselected}
      style={property1unselectedStyle}
    >
      <div className={styles.no} style={noStyle}>
        {no}
      </div>
    </div>
  );
};

export default Property1unselected;
