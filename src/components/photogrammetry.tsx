import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./photogrammetry.module.css";

type PhotogrammetryType = {
  organism?: string;

  /** Style props */
  photogrammetryPosition?: Property.Position;
  photogrammetryHeight?: Property.Height;
  photogrammetryPadding?: Property.Padding;
  photogrammetryTop?: Property.Top;
  photogrammetryLeft?: Property.Left;
  organismFontSize?: Property.FontSize;
  organismLineHeight?: Property.LineHeight;
};

const Photogrammetry: FunctionComponent<PhotogrammetryType> = ({
  organism,
  photogrammetryPosition,
  photogrammetryHeight,
  photogrammetryPadding,
  photogrammetryTop,
  photogrammetryLeft,
  organismFontSize,
  organismLineHeight,
}) => {
  const photogrammetry1Style: CSS.Properties = useMemo(() => {
    return {
      position: photogrammetryPosition,
      height: photogrammetryHeight,
      padding: photogrammetryPadding,
      top: photogrammetryTop,
      left: photogrammetryLeft,
    };
  }, [
    photogrammetryPosition,
    photogrammetryHeight,
    photogrammetryPadding,
    photogrammetryTop,
    photogrammetryLeft,
  ]);

  const organismStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: organismFontSize,
      lineHeight: organismLineHeight,
    };
  }, [organismFontSize, organismLineHeight]);

  return (
    <div className={styles.photogrammetry} style={photogrammetry1Style}>
      <div className={styles.organism} style={organismStyle}>
        {organism}
      </div>
    </div>
  );
};

export default Photogrammetry;
