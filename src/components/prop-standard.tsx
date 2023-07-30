import { FunctionComponent, useState, useMemo, useCallback } from "react";
import ModelShowpage from "./model-showpage";
import PortalPopup from "./portal-popup";
import CSS, { Property } from "csstype";
import SmallRankIcons from "./small-rank-icons";
import styles from "./prop-standard.module.css";

type PropStandardType = {
  text: string;
  group1223?: string;
  group1222?: string;
  likeLikeButtonLikedLike?: string;

  /** Style props */
  propStandardPosition?: Property.Position;
  propStandardWidth?: Property.Width;
  propStandardHeight?: Property.Height;
  propStandardFlexShrink?: Property.FlexShrink;
  propStandardTop?: Property.Top;
  propStandardLeft?: Property.Left;
  rectangleTop?: Property.Top;
  rectangleLeft?: Property.Left;
  rectangleWidth?: Property.Width;
  rectangleHeight?: Property.Height;
  titleTop?: Property.Top;
  titleLeft?: Property.Left;
  titleLineHeight?: Property.LineHeight;
  descriptionTop?: Property.Top;
  descriptionLeft?: Property.Left;
  descriptionLineHeight?: Property.LineHeight;
  descriptionWidth?: Property.Width;
  licenseTypesTop?: Property.Top;
  licenseTypesLeft?: Property.Left;
  licenseTypesWidth?: Property.Width;
  licenseTypesHeight?: Property.Height;
  licenseTypesTop1?: Property.Top;
  licenseTypesLeft1?: Property.Left;
  licenseTypesLineHeight?: Property.LineHeight;
  frameDivTop?: Property.Top;
  frameDivLeft?: Property.Left;
  groupIconWidth?: Property.Width;
  groupIconHeight?: Property.Height;
  groupIconWidth1?: Property.Width;
  groupIconHeight1?: Property.Height;
  groupIconWidth2?: Property.Width;
  groupIconHeight2?: Property.Height;
  usernameTop?: Property.Top;
  usernameLeft?: Property.Left;
  usernameWidth?: Property.Width;
  usernameHeight?: Property.Height;
  creatorNameTop?: Property.Top;
  creatorNameLeft?: Property.Left;
  creatorNameLineHeight?: Property.LineHeight;
  ellipseDivTop?: Property.Top;
  ellipseDivLeft?: Property.Left;
  ellipseDivWidth?: Property.Width;
  ellipseDivHeight?: Property.Height;
  modelQualityTop?: Property.Top;
  modelQualityLeft?: Property.Left;
  modelQualityWidth?: Property.Width;
  modelQualityHeight?: Property.Height;
  smallRankIconsTop?: Property.Top;
  smallRankIconsLeft?: Property.Left;
  groupIconWidth3?: Property.Width;
  groupIconHeight3?: Property.Height;
  groupIconWidth4?: Property.Width;
  groupIconHeight4?: Property.Height;
  groupIconWidth5?: Property.Width;
  groupIconHeight5?: Property.Height;
  groupIconWidth6?: Property.Width;
  groupIconHeight6?: Property.Height;
  groupIconWidth7?: Property.Width;
  groupIconHeight7?: Property.Height;
  divTop?: Property.Top;
  divLeft?: Property.Left;
  divLineHeight?: Property.LineHeight;
  divLineHeight1?: Property.LineHeight;
};

const PropStandard: FunctionComponent<PropStandardType> = ({
  text = "This text is sample text. This is where a short description of the model will be. I think this should provide sufficient space",
  group1223,
  group1222,
  likeLikeButtonLikedLike,
  propStandardPosition,
  propStandardWidth,
  propStandardHeight,
  propStandardFlexShrink,
  propStandardTop,
  propStandardLeft,
  rectangleTop,
  rectangleLeft,
  rectangleWidth,
  rectangleHeight,
  titleTop,
  titleLeft,
  titleLineHeight,
  descriptionTop,
  descriptionLeft,
  descriptionLineHeight,
  descriptionWidth,
  licenseTypesTop,
  licenseTypesLeft,
  licenseTypesWidth,
  licenseTypesHeight,
  licenseTypesTop1,
  licenseTypesLeft1,
  licenseTypesLineHeight,
  frameDivTop,
  frameDivLeft,
  groupIconWidth,
  groupIconHeight,
  groupIconWidth1,
  groupIconHeight1,
  groupIconWidth2,
  groupIconHeight2,
  usernameTop,
  usernameLeft,
  usernameWidth,
  usernameHeight,
  creatorNameTop,
  creatorNameLeft,
  creatorNameLineHeight,
  ellipseDivTop,
  ellipseDivLeft,
  ellipseDivWidth,
  ellipseDivHeight,
  modelQualityTop,
  modelQualityLeft,
  modelQualityWidth,
  modelQualityHeight,
  smallRankIconsTop,
  smallRankIconsLeft,
  groupIconWidth3,
  groupIconHeight3,
  groupIconWidth4,
  groupIconHeight4,
  groupIconWidth5,
  groupIconHeight5,
  groupIconWidth6,
  groupIconHeight6,
  groupIconWidth7,
  groupIconHeight7,
  divTop,
  divLeft,
  divLineHeight,
  divLineHeight1,
}) => {
  const [isModelShowpageOpen, setModelShowpageOpen] = useState(false);
  const propStandardStyle: CSS.Properties = useMemo(() => {
    return {
      position: propStandardPosition,
      width: propStandardWidth,
      height: propStandardHeight,
      flexShrink: propStandardFlexShrink,
      top: propStandardTop,
      left: propStandardLeft,
    };
  }, [
    propStandardPosition,
    propStandardWidth,
    propStandardHeight,
    propStandardFlexShrink,
    propStandardTop,
    propStandardLeft,
  ]);

  const rectangleStyle: CSS.Properties = useMemo(() => {
    return {
      top: rectangleTop,
      left: rectangleLeft,
      width: rectangleWidth,
      height: rectangleHeight,
    };
  }, [rectangleTop, rectangleLeft, rectangleWidth, rectangleHeight]);

  const titleStyle: CSS.Properties = useMemo(() => {
    return {
      top: titleTop,
      left: titleLeft,
      lineHeight: titleLineHeight,
    };
  }, [titleTop, titleLeft, titleLineHeight]);

  const descriptionStyle: CSS.Properties = useMemo(() => {
    return {
      top: descriptionTop,
      left: descriptionLeft,
      lineHeight: descriptionLineHeight,
      width: descriptionWidth,
    };
  }, [
    descriptionTop,
    descriptionLeft,
    descriptionLineHeight,
    descriptionWidth,
  ]);

  const licenseTypesStyle: CSS.Properties = useMemo(() => {
    return {
      top: licenseTypesTop,
      left: licenseTypesLeft,
      width: licenseTypesWidth,
      height: licenseTypesHeight,
    };
  }, [
    licenseTypesTop,
    licenseTypesLeft,
    licenseTypesWidth,
    licenseTypesHeight,
  ]);

  const licenseTypes1Style: CSS.Properties = useMemo(() => {
    return {
      top: licenseTypesTop1,
      left: licenseTypesLeft1,
      lineHeight: licenseTypesLineHeight,
    };
  }, [licenseTypesTop1, licenseTypesLeft1, licenseTypesLineHeight]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  const groupIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth,
      height: groupIconHeight,
    };
  }, [groupIconWidth, groupIconHeight]);

  const groupIcon1Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth1,
      height: groupIconHeight1,
    };
  }, [groupIconWidth1, groupIconHeight1]);

  const groupIcon2Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth2,
      height: groupIconHeight2,
    };
  }, [groupIconWidth2, groupIconHeight2]);

  const usernameStyle: CSS.Properties = useMemo(() => {
    return {
      top: usernameTop,
      left: usernameLeft,
      width: usernameWidth,
      height: usernameHeight,
    };
  }, [usernameTop, usernameLeft, usernameWidth, usernameHeight]);

  const creatorNameStyle: CSS.Properties = useMemo(() => {
    return {
      top: creatorNameTop,
      left: creatorNameLeft,
      lineHeight: creatorNameLineHeight,
    };
  }, [creatorNameTop, creatorNameLeft, creatorNameLineHeight]);

  const ellipseDivStyle: CSS.Properties = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
      width: ellipseDivWidth,
      height: ellipseDivHeight,
    };
  }, [ellipseDivTop, ellipseDivLeft, ellipseDivWidth, ellipseDivHeight]);

  const modelQualityStyle: CSS.Properties = useMemo(() => {
    return {
      top: modelQualityTop,
      left: modelQualityLeft,
      width: modelQualityWidth,
      height: modelQualityHeight,
    };
  }, [
    modelQualityTop,
    modelQualityLeft,
    modelQualityWidth,
    modelQualityHeight,
  ]);

  const smallRankIconsStyle: CSS.Properties = useMemo(() => {
    return {
      top: smallRankIconsTop,
      left: smallRankIconsLeft,
    };
  }, [smallRankIconsTop, smallRankIconsLeft]);

  const groupIcon3Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth3,
      height: groupIconHeight3,
    };
  }, [groupIconWidth3, groupIconHeight3]);

  const groupIcon4Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth4,
      height: groupIconHeight4,
    };
  }, [groupIconWidth4, groupIconHeight4]);

  const groupIcon5Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth5,
      height: groupIconHeight5,
    };
  }, [groupIconWidth5, groupIconHeight5]);

  const groupIcon6Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth6,
      height: groupIconHeight6,
    };
  }, [groupIconWidth6, groupIconHeight6]);

  const groupIcon7Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth7,
      height: groupIconHeight7,
    };
  }, [groupIconWidth7, groupIconHeight7]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      top: divTop,
      left: divLeft,
      lineHeight: divLineHeight,
    };
  }, [divTop, divLeft, divLineHeight]);

  const div1Style: CSS.Properties = useMemo(() => {
    return {
      lineHeight: divLineHeight1,
    };
  }, [divLineHeight1]);

  const openModelShowpage = useCallback(() => {
    setModelShowpageOpen(true);
  }, []);

  const closeModelShowpage = useCallback(() => {
    setModelShowpageOpen(false);
  }, []);

  return (
    <>
      <div
        className={styles.propstandard}
        onClick={openModelShowpage}
        style={propStandardStyle}
      >
        <img
          className={styles.dViewerRectangle}
          alt=""
          src="/3d-viewer-rectangle@2x.png"
        />
        <div className={styles.infoField}>
          <div className={styles.rectangle} style={rectangleStyle} />
          <div className={styles.title} style={titleStyle}>
            Pigeon
          </div>
          <div className={styles.description} style={descriptionStyle}>
            {text}
          </div>
          <div className={styles.licenseTypes} style={licenseTypesStyle}>
            <div className={styles.licenseTypes1} style={licenseTypes1Style}>
              License Types
            </div>
            <div
              className={styles.certificateDiplomaSealWaxIParent}
              style={frameDivStyle}
            >
              <div className={styles.certificateDiplomaSealWaxI}>
                <img
                  className={styles.certificateDiplomaSealWaxIChild}
                  alt=""
                  src="/group-1223.svg"
                  style={groupIconStyle}
                />
              </div>
              <div className={styles.certificateDiplomaSealWaxI}>
                <img
                  className={styles.certificateDiplomaSealWaxIChild}
                  alt=""
                  src={group1223}
                  style={groupIcon1Style}
                />
              </div>
              <div className={styles.certificateDiplomaSealWaxI}>
                <img
                  className={styles.certificateDiplomaSealWaxIChild}
                  alt=""
                  src={group1222}
                  style={groupIcon2Style}
                />
              </div>
            </div>
          </div>
          <div className={styles.username} style={usernameStyle}>
            <div className={styles.creatorName} style={creatorNameStyle}>
              creator_name
            </div>
            <div className={styles.usernameChild} style={ellipseDivStyle} />
          </div>
          <div className={styles.modelQuality} style={modelQualityStyle}>
            <SmallRankIcons
              smallRankIconsPosition="absolute"
              smallRankIconsTop="0px"
              smallRankIconsLeft="0px"
              groupIconWidth="19px"
              groupIconHeight="19px"
              groupIconWidth1="19px"
              groupIconHeight1="19px"
              groupIconWidth2="19px"
              groupIconHeight2="19px"
              groupIconWidth3="19px"
              groupIconHeight3="19px"
              groupIconWidth4="19px"
              groupIconHeight4="19px"
            />
          </div>
          <div className={styles.div} style={divStyle}>
            $1200.00
          </div>
          <div className={styles.div1} style={div1Style}>
            1620
          </div>
          <img
            className={styles.likeLikeButtonLikedLikesTIcon}
            alt=""
            src={likeLikeButtonLikedLike}
          />
        </div>
      </div>
      {isModelShowpageOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModelShowpage}
        >
          <ModelShowpage onClose={closeModelShowpage} />
        </PortalPopup>
      )}
    </>
  );
};

export default PropStandard;
