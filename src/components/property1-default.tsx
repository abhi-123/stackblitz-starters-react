import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default.module.css";

type Property1DefaultType = {
  grade?: string;

  /** Style props */
  property1DefaultPosition?: Property.Position;
  gradeLineHeight?: Property.LineHeight;
  lineDivHeight?: Property.Height;
};

const Property1Default: FunctionComponent<Property1DefaultType> = ({
  grade,
  property1DefaultPosition,
  gradeLineHeight,
  lineDivHeight,
}) => {
  const property1DefaultStyle: CSS.Properties = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  const gradeStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: gradeLineHeight,
    };
  }, [gradeLineHeight]);

  const lineDivStyle: CSS.Properties = useMemo(() => {
    return {
      height: lineDivHeight,
    };
  }, [lineDivHeight]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.grade} style={gradeStyle}>
        {grade}
      </div>
      <div className={styles.property1defaultChild} style={lineDivStyle} />
    </div>
  );
};

export default Property1Default;
