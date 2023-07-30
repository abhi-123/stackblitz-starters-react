import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./button44default.module.css";

type Button44defaultType = {
  newModule?: string;

  /** Style props */
  button44defaultPosition?: Property.Position;
  button44defaultWidth?: Property.Width;
  button44defaultHeight?: Property.Height;
  button44defaultTop?: Property.Top;
  button44defaultLeft?: Property.Left;
  button44defaultCursor?: Property.Cursor;
  rectangleDivBackgroundColor?: Property.BackgroundColor;
  rectangleDivBorder?: Property.Border;
  rectangleDivBoxSizing?: Property.BoxSizing;
  newModuleLineHeight?: Property.LineHeight;
  newModuleColor?: Property.Color;
};

const Button44default: FunctionComponent<Button44defaultType> = ({
  newModule,
  button44defaultPosition,
  button44defaultWidth,
  button44defaultHeight,
  button44defaultTop,
  button44defaultLeft,
  button44defaultCursor,
  rectangleDivBackgroundColor,
  rectangleDivBorder,
  rectangleDivBoxSizing,
  newModuleLineHeight,
  newModuleColor,
}) => {
  const button44defaultStyle: CSS.Properties = useMemo(() => {
    return {
      position: button44defaultPosition,
      width: button44defaultWidth,
      height: button44defaultHeight,
      top: button44defaultTop,
      left: button44defaultLeft,
      cursor: button44defaultCursor,
    };
  }, [
    button44defaultPosition,
    button44defaultWidth,
    button44defaultHeight,
    button44defaultTop,
    button44defaultLeft,
    button44defaultCursor,
  ]);

  const rectangleDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
      border: rectangleDivBorder,
      boxSizing: rectangleDivBoxSizing,
    };
  }, [rectangleDivBackgroundColor, rectangleDivBorder, rectangleDivBoxSizing]);

  const newModuleStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: newModuleLineHeight,
      color: newModuleColor,
    };
  }, [newModuleLineHeight, newModuleColor]);

  return (
    <div className={styles.button44default} style={button44defaultStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} style={rectangleDivStyle} />
        <div className={styles.newModule} style={newModuleStyle}>
          {newModule}
        </div>
      </div>
    </div>
  );
};

export default Button44default;
