import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-variant27.module.css";

type Property1Variant27Type = {
  /** Style props */
  property1Variant2Position?: Property.Position;
  property1Variant2Width?: Property.Width;
  property1Variant2Height?: Property.Height;
  property1Variant2Top?: Property.Top;
  property1Variant2Left?: Property.Left;
};

const Property1Variant27: FunctionComponent<Property1Variant27Type> = ({
  property1Variant2Position,
  property1Variant2Width,
  property1Variant2Height,
  property1Variant2Top,
  property1Variant2Left,
}) => {
  const property1Variant27Style: CSS.Properties = useMemo(() => {
    return {
      position: property1Variant2Position,
      width: property1Variant2Width,
      height: property1Variant2Height,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [
    property1Variant2Position,
    property1Variant2Width,
    property1Variant2Height,
    property1Variant2Top,
    property1Variant2Left,
  ]);

  return (
    <div className={styles.property1variant2} style={property1Variant27Style} />
  );
};

export default Property1Variant27;
