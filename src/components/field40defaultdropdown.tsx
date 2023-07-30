import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./field40defaultdropdown.module.css";

type Field40defaultdropdownType = {
  email?: string;
  showViewFillIcon?: boolean;

  /** Style props */
  field40defaultdropdownPosition?: Property.Position;
  field40defaultdropdownWidth?: Property.Width;
  field40defaultdropdownTop?: Property.Top;
  field40defaultdropdownRight?: Property.Right;
  field40defaultdropdownLeft?: Property.Left;
  field40defaultdropdownHeight?: Property.Height;
  field40defaultdropdownBottom?: Property.Bottom;
  rectangleDivBackgroundColor?: Property.BackgroundColor;
  rectangleDivBorder?: Property.Border;
  rectangleDivTop?: Property.Top;
  rectangleDivRight?: Property.Right;
  rectangleDivBottom?: Property.Bottom;
  rectangleDivLeft?: Property.Left;
  emailColor?: Property.Color;
  emailLeft?: Property.Left;
  emailLineHeight?: Property.LineHeight;
  emailTop?: Property.Top;
  emailFontSize?: Property.FontSize;
  emailDisplay?: Property.Display;
  emailAlignItems?: Property.AlignItems;
  emailWidth?: Property.Width;
  viewFillIconTop?: Property.Top;
  viewFillIconRight?: Property.Right;
  viewFillIconWidth?: Property.Width;
  viewFillIconHeight?: Property.Height;
  viewFillIconPosition?: Property.Position;
  viewFillIconLineBreak?: Property.LineBreak;
};

const Field40defaultdropdown: FunctionComponent<Field40defaultdropdownType> = ({
  email,
  showViewFillIcon,
  field40defaultdropdownPosition,
  field40defaultdropdownWidth,
  field40defaultdropdownTop,
  field40defaultdropdownRight,
  field40defaultdropdownLeft,
  field40defaultdropdownHeight,
  field40defaultdropdownBottom,
  rectangleDivBackgroundColor,
  rectangleDivBorder,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  emailColor,
  emailLeft,
  emailLineHeight,
  emailTop,
  emailFontSize,
  emailDisplay,
  emailAlignItems,
  emailWidth,
  viewFillIconTop,
  viewFillIconRight,
  viewFillIconWidth,
  viewFillIconHeight,
  viewFillIconPosition,
  viewFillIconLineBreak,
}) => {
  const field40defaultdropdownStyle: CSS.Properties = useMemo(() => {
    return {
      position: field40defaultdropdownPosition,
      width: field40defaultdropdownWidth,
      top: field40defaultdropdownTop,
      right: field40defaultdropdownRight,
      left: field40defaultdropdownLeft,
      height: field40defaultdropdownHeight,
      bottom: field40defaultdropdownBottom,
    };
  }, [
    field40defaultdropdownPosition,
    field40defaultdropdownWidth,
    field40defaultdropdownTop,
    field40defaultdropdownRight,
    field40defaultdropdownLeft,
    field40defaultdropdownHeight,
    field40defaultdropdownBottom,
  ]);

  const rectangleDiv1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
      border: rectangleDivBorder,
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
    };
  }, [
    rectangleDivBackgroundColor,
    rectangleDivBorder,
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
  ]);

  const emailStyle: CSS.Properties = useMemo(() => {
    return {
      color: emailColor,
      left: emailLeft,
      lineHeight: emailLineHeight,
      top: emailTop,
      fontSize: emailFontSize,
      display: emailDisplay,
      alignItems: emailAlignItems,
      width: emailWidth,
    };
  }, [
    emailColor,
    emailLeft,
    emailLineHeight,
    emailTop,
    emailFontSize,
    emailDisplay,
    emailAlignItems,
    emailWidth,
  ]);

  const viewFillIconStyle: CSS.Properties = useMemo(() => {
    return {
      top: viewFillIconTop,
      right: viewFillIconRight,
      width: viewFillIconWidth,
      height: viewFillIconHeight,
      position: viewFillIconPosition,
      lineBreak: viewFillIconLineBreak,
    };
  }, [
    viewFillIconTop,
    viewFillIconRight,
    viewFillIconWidth,
    viewFillIconHeight,
    viewFillIconPosition,
    viewFillIconLineBreak,
  ]);

  return (
    <div
      className={styles.field40defaultdropdown}
      style={field40defaultdropdownStyle}
    >
      <div
        className={styles.field40defaultdropdownChild}
        style={rectangleDiv1Style}
      />
      <div className={styles.email} style={emailStyle}>
        {email}
      </div>
      {showViewFillIcon && (
        <img
          className={styles.viewFillIcon}
          alt=""
          src="/view-fill2.svg"
          style={viewFillIconStyle}
        />
      )}
    </div>
  );
};

export default Field40defaultdropdown;
