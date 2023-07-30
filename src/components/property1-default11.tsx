import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-default11.module.css";

type Property1Default11Type = {
  personalLicense?: string;

  /** Style props */
  property1DefaultWidth?: Property.Width;
  property1DefaultHeight?: Property.Height;
  ellipseDivTop?: Property.Top;
  ellipseDivLeft?: Property.Left;
  ellipseDivWidth?: Property.Width;
  ellipseDivHeight?: Property.Height;
  personalLicenseTop?: Property.Top;
  personalLicenseLeft?: Property.Left;
  personalLicenseLineHeight?: Property.LineHeight;
  personalLicenseFontWeight?: Property.FontWeight;
  personalLicenseColor?: Property.Color;
  personalLicenseDisplay?: Property.Display;
  personalLicenseAlignItems?: Property.AlignItems;
  personalLicenseWidth?: Property.Width;
  personalLicenseHeight?: Property.Height;
  youCovenantRepresentTop?: Property.Top;
  youCovenantRepresentLeft?: Property.Left;
  youCovenantRepresentLineHeight?: Property.LineHeight;
  youCovenantRepresentFontWeight?: Property.FontWeight;
  youCovenantRepresentFontFamily?: Property.FontFamily;
  youCovenantRepresentColor?: Property.Color;
  youCovenantRepresentWidth?: Property.Width;
  youCovenantRepresentHeight?: Property.Height;
};

const Property1Default11: FunctionComponent<Property1Default11Type> = ({
  personalLicense,
  property1DefaultWidth,
  property1DefaultHeight,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivWidth,
  ellipseDivHeight,
  personalLicenseTop,
  personalLicenseLeft,
  personalLicenseLineHeight,
  personalLicenseFontWeight,
  personalLicenseColor,
  personalLicenseDisplay,
  personalLicenseAlignItems,
  personalLicenseWidth,
  personalLicenseHeight,
  youCovenantRepresentTop,
  youCovenantRepresentLeft,
  youCovenantRepresentLineHeight,
  youCovenantRepresentFontWeight,
  youCovenantRepresentFontFamily,
  youCovenantRepresentColor,
  youCovenantRepresentWidth,
  youCovenantRepresentHeight,
}) => {
  const property1Default11Style: CSS.Properties = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
    };
  }, [property1DefaultWidth, property1DefaultHeight]);

  const ellipseDiv6Style: CSS.Properties = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivTop, ellipseDivLeft, ellipseDivWidth, ellipseDivHeight]);

  const personalLicenseStyle: CSS.Properties = useMemo(() => {
    return {
      top: personalLicenseTop,
      left: personalLicenseLeft,
      lineHeight: personalLicenseLineHeight,
      fontWeight: personalLicenseFontWeight,
      color: personalLicenseColor,
      display: personalLicenseDisplay,
      alignItems: personalLicenseAlignItems,
      width: personalLicenseWidth,
      height: personalLicenseHeight,
    };
  }, [
    personalLicenseTop,
    personalLicenseLeft,
    personalLicenseLineHeight,
    personalLicenseFontWeight,
    personalLicenseColor,
    personalLicenseDisplay,
    personalLicenseAlignItems,
    personalLicenseWidth,
    personalLicenseHeight,
  ]);

  const youCovenantRepresentStyle: CSS.Properties = useMemo(() => {
    return {
      top: youCovenantRepresentTop,
      left: youCovenantRepresentLeft,
      lineHeight: youCovenantRepresentLineHeight,
      fontWeight: youCovenantRepresentFontWeight,
      fontFamily: youCovenantRepresentFontFamily,
      color: youCovenantRepresentColor,
      width: youCovenantRepresentWidth,
      height: youCovenantRepresentHeight,
    };
  }, [
    youCovenantRepresentTop,
    youCovenantRepresentLeft,
    youCovenantRepresentLineHeight,
    youCovenantRepresentFontWeight,
    youCovenantRepresentFontFamily,
    youCovenantRepresentColor,
    youCovenantRepresentWidth,
    youCovenantRepresentHeight,
  ]);

  return (
    <div className={styles.property1default} style={property1Default11Style}>
      <div className={styles.property1defaultChild} style={ellipseDiv6Style} />
      <div className={styles.personalLicense} style={personalLicenseStyle}>
        {personalLicense}
      </div>
      <div
        className={styles.youCovenantRepresent}
        style={youCovenantRepresentStyle}
      >
        You covenant, represent, and warrant that this is your original work and
        contains no intellectual property or other rights of any kind of which
        you are not the exclusive owner.
      </div>
    </div>
  );
};

export default Property1Default11;
