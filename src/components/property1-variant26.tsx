import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-variant26.module.css";

type Property1Variant26Type = {
  /** Style props */
  property1Variant2Position?: Property.Position;
  property1Variant2Width?: Property.Width;
  property1Variant2Height?: Property.Height;
};

const Property1Variant26: FunctionComponent<Property1Variant26Type> = ({
  property1Variant2Position,
  property1Variant2Width,
  property1Variant2Height,
}) => {
  const property1Variant26Style: CSS.Properties = useMemo(() => {
    return {
      position: property1Variant2Position,
      width: property1Variant2Width,
      height: property1Variant2Height,
    };
  }, [
    property1Variant2Position,
    property1Variant2Width,
    property1Variant2Height,
  ]);

  return (
    <div className={styles.property1variant2} style={property1Variant26Style} />
  );
};

export default Property1Variant26;
