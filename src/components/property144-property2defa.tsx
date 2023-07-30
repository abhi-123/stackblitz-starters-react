import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property144-property2defa.module.css";

type Property144Property2defaType = {
  /** Style props */
  property144Property2defaPosition?: Property.Position;
  property144Property2defaWidth?: Property.Width;
  property144Property2defaHeight?: Property.Height;
  property144Property2defaTop?: Property.Top;
  property144Property2defaLeft?: Property.Left;
  abstractLineHeight?: Property.LineHeight;
};

const Property144Property2defa: FunctionComponent<
  Property144Property2defaType
> = ({
  property144Property2defaPosition,
  property144Property2defaWidth,
  property144Property2defaHeight,
  property144Property2defaTop,
  property144Property2defaLeft,
  abstractLineHeight,
}) => {
  const property144Property2defaStyle: CSS.Properties = useMemo(() => {
    return {
      position: property144Property2defaPosition,
      width: property144Property2defaWidth,
      height: property144Property2defaHeight,
      top: property144Property2defaTop,
      left: property144Property2defaLeft,
    };
  }, [
    property144Property2defaPosition,
    property144Property2defaWidth,
    property144Property2defaHeight,
    property144Property2defaTop,
    property144Property2defaLeft,
  ]);

  const abstractStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: abstractLineHeight,
    };
  }, [abstractLineHeight]);

  return (
    <div
      className={styles.property144Property2defa}
      style={property144Property2defaStyle}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.abstract} style={abstractStyle}>
          abstract
        </div>
      </div>
    </div>
  );
};

export default Property144Property2defa;
