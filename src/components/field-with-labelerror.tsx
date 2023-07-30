import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import Field40defaultdropdown from "./field40defaultdropdown";
import styles from "./field-with-labelerror.module.css";

type FieldWithLabelerrorType = {
  emailAddress?: string;
  viewFill?: string;

  /** Style props */
  fieldWithLabelerrorWidth?: Property.Width;
  fieldWithLabelerrorHeight?: Property.Height;
  emailAddressTop?: Property.Top;
  emailAddressLeft?: Property.Left;
  emailAddressLineHeight?: Property.LineHeight;
  emailAddressColor?: Property.Color;
  field40defaultdropdownTop?: Property.Top;
  field40defaultdropdownRight?: Property.Right;
  field40defaultdropdownLeft?: Property.Left;
  field40defaultdropdownHeight?: Property.Height;
  rectangleDivTop?: Property.Top;
  rectangleDivRight?: Property.Right;
  rectangleDivBottom?: Property.Bottom;
  rectangleDivLeft?: Property.Left;
  rectangleDivBackgroundColor?: Property.BackgroundColor;
  rectangleDivBorder?: Property.Border;
  emailLeft?: Property.Left;
  emailLineHeight?: Property.LineHeight;
  emailColor?: Property.Color;
  viewFillIconTop?: Property.Top;
  viewFillIconRight?: Property.Right;
  viewFillIconWidth?: Property.Width;
  viewFillIconHeight?: Property.Height;
};

const FieldWithLabelerror: FunctionComponent<FieldWithLabelerrorType> = ({
  emailAddress,
  viewFill,
  fieldWithLabelerrorWidth,
  fieldWithLabelerrorHeight,
  emailAddressTop,
  emailAddressLeft,
  emailAddressLineHeight,
  emailAddressColor,
  field40defaultdropdownTop,
  field40defaultdropdownRight,
  field40defaultdropdownLeft,
  field40defaultdropdownHeight,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  rectangleDivBackgroundColor,
  rectangleDivBorder,
  emailLeft,
  emailLineHeight,
  emailColor,
  viewFillIconTop,
  viewFillIconRight,
  viewFillIconWidth,
  viewFillIconHeight,
}) => {
  const fieldWithLabelerrorStyle: CSS.Properties = useMemo(() => {
    return {
      width: fieldWithLabelerrorWidth,
      height: fieldWithLabelerrorHeight,
    };
  }, [fieldWithLabelerrorWidth, fieldWithLabelerrorHeight]);

  const emailAddressStyle: CSS.Properties = useMemo(() => {
    return {
      top: emailAddressTop,
      left: emailAddressLeft,
      lineHeight: emailAddressLineHeight,
      color: emailAddressColor,
    };
  }, [
    emailAddressTop,
    emailAddressLeft,
    emailAddressLineHeight,
    emailAddressColor,
  ]);

  const field40defaultdropdownStyle: CSS.Properties = useMemo(() => {
    return {
      top: field40defaultdropdownTop,
      right: field40defaultdropdownRight,
      left: field40defaultdropdownLeft,
      height: field40defaultdropdownHeight,
    };
  }, [
    field40defaultdropdownTop,
    field40defaultdropdownRight,
    field40defaultdropdownLeft,
    field40defaultdropdownHeight,
  ]);

  const rectangleDiv1Style: CSS.Properties = useMemo(() => {
    return {
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
      backgroundColor: rectangleDivBackgroundColor,
      border: rectangleDivBorder,
    };
  }, [
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
    rectangleDivBackgroundColor,
    rectangleDivBorder,
  ]);

  const emailStyle: CSS.Properties = useMemo(() => {
    return {
      left: emailLeft,
      lineHeight: emailLineHeight,
      color: emailColor,
    };
  }, [emailLeft, emailLineHeight, emailColor]);

  const viewFillIconStyle: CSS.Properties = useMemo(() => {
    return {
      top: viewFillIconTop,
      right: viewFillIconRight,
      width: viewFillIconWidth,
      height: viewFillIconHeight,
    };
  }, [
    viewFillIconTop,
    viewFillIconRight,
    viewFillIconWidth,
    viewFillIconHeight,
  ]);

  return (
    <div
      className={styles.fieldWithLabelerror}
      style={fieldWithLabelerrorStyle}
    >
      <div className={styles.emailAddress} style={emailAddressStyle}>
        {emailAddress}
      </div>
      <Field40defaultdropdown
        email="•••••••"
        showViewFillIcon
        field40defaultdropdownPosition="absolute"
        field40defaultdropdownWidth="100%"
        field40defaultdropdownTop="24px"
        field40defaultdropdownRight="0px"
        field40defaultdropdownLeft="0px"
        field40defaultdropdownHeight="40px"
        field40defaultdropdownBottom="unset"
        rectangleDivBackgroundColor="#fff"
        rectangleDivBorder="1px solid var(--red-10)"
        rectangleDivTop="0px"
        rectangleDivRight="0px"
        rectangleDivBottom="0px"
        rectangleDivLeft="0px"
        emailColor="#ff6f91"
        emailLeft="12px"
        emailLineHeight="24px"
        emailTop="calc(50% - 12px)"
        emailFontSize="12px"
        emailDisplay="inline-block"
        emailAlignItems="unset"
        emailWidth="calc(100% - 24px)"
        viewFillIconTop="8px"
        viewFillIconRight="12px"
        viewFillIconWidth="24px"
        viewFillIconHeight="24px"
        viewFillIconPosition="absolute"
        viewFillIconLineBreak="unset"
      />
    </div>
  );
};

export default FieldWithLabelerror;
