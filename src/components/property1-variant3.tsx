import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property1-variant3.module.css";

type Property1Variant3Type = {
  /** Style props */
  property1Variant3Position?: Property.Position;
  property1Variant3Width?: Property.Width;
  property1Variant3Height?: Property.Height;
  property1Variant3Top?: Property.Top;
  property1Variant3Left?: Property.Left;
  frameDivWidth?: Property.Width;
  frameDivHeight?: Property.Height;
  frameDivWidth1?: Property.Width;
  frameDivHeight1?: Property.Height;
  frameDivWidth2?: Property.Width;
  frameDivHeight2?: Property.Height;
  groupDivTop?: Property.Top;
  groupDivLeft?: Property.Left;
  groupDivWidth?: Property.Width;
  groupDivHeight?: Property.Height;
  cornersFramePhotoPictureVTop?: Property.Top;
  cornersFramePhotoPictureVLeft?: Property.Left;
  cornersFramePhotoPictureVWidth?: Property.Width;
  cornersFramePhotoPictureVHeight?: Property.Height;
  cornersFramePhotoPictureVTop1?: Property.Top;
  cornersFramePhotoPictureVLeft1?: Property.Left;
  cornersFramePhotoPictureVWidth1?: Property.Width;
  cornersFramePhotoPictureVHeight1?: Property.Height;
  cornersFramePhotoPictureVTop2?: Property.Top;
  cornersFramePhotoPictureVLeft2?: Property.Left;
  cornersFramePhotoPictureVWidth2?: Property.Width;
  cornersFramePhotoPictureVHeight2?: Property.Height;
  frameDivWidth3?: Property.Width;
  frameDivHeight3?: Property.Height;
  frameDivWidth4?: Property.Width;
  frameDivHeight4?: Property.Height;
  frameDivTop?: Property.Top;
  frameDivLeft?: Property.Left;
  frameDivWidth5?: Property.Width;
  frameDivHeight5?: Property.Height;
  groupDivWidth1?: Property.Width;
  groupDivHeight1?: Property.Height;
  agreementBusinessContractTop?: Property.Top;
  agreementBusinessContractLeft?: Property.Left;
  agreementBusinessContractWidth?: Property.Width;
  agreementBusinessContractHeight?: Property.Height;
  groupDivWidth2?: Property.Width;
  groupDivHeight2?: Property.Height;
  bookCopybookDiaryJournalNTop?: Property.Top;
  bookCopybookDiaryJournalNLeft?: Property.Left;
  bookCopybookDiaryJournalNWidth?: Property.Width;
  bookCopybookDiaryJournalNHeight?: Property.Height;
};

const Property1Variant3: FunctionComponent<Property1Variant3Type> = ({
  property1Variant3Position,
  property1Variant3Width,
  property1Variant3Height,
  property1Variant3Top,
  property1Variant3Left,
  frameDivWidth,
  frameDivHeight,
  frameDivWidth1,
  frameDivHeight1,
  frameDivWidth2,
  frameDivHeight2,
  groupDivTop,
  groupDivLeft,
  groupDivWidth,
  groupDivHeight,
  cornersFramePhotoPictureVTop,
  cornersFramePhotoPictureVLeft,
  cornersFramePhotoPictureVWidth,
  cornersFramePhotoPictureVHeight,
  cornersFramePhotoPictureVTop1,
  cornersFramePhotoPictureVLeft1,
  cornersFramePhotoPictureVWidth1,
  cornersFramePhotoPictureVHeight1,
  cornersFramePhotoPictureVTop2,
  cornersFramePhotoPictureVLeft2,
  cornersFramePhotoPictureVWidth2,
  cornersFramePhotoPictureVHeight2,
  frameDivWidth3,
  frameDivHeight3,
  frameDivWidth4,
  frameDivHeight4,
  frameDivTop,
  frameDivLeft,
  frameDivWidth5,
  frameDivHeight5,
  groupDivWidth1,
  groupDivHeight1,
  agreementBusinessContractTop,
  agreementBusinessContractLeft,
  agreementBusinessContractWidth,
  agreementBusinessContractHeight,
  groupDivWidth2,
  groupDivHeight2,
  bookCopybookDiaryJournalNTop,
  bookCopybookDiaryJournalNLeft,
  bookCopybookDiaryJournalNWidth,
  bookCopybookDiaryJournalNHeight,
}) => {
  const property1Variant3Style: CSS.Properties = useMemo(() => {
    return {
      position: property1Variant3Position,
      width: property1Variant3Width,
      height: property1Variant3Height,
      top: property1Variant3Top,
      left: property1Variant3Left,
    };
  }, [
    property1Variant3Position,
    property1Variant3Width,
    property1Variant3Height,
    property1Variant3Top,
    property1Variant3Left,
  ]);

  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivWidth, frameDivHeight]);

  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      width: frameDivWidth1,
      height: frameDivHeight1,
    };
  }, [frameDivWidth1, frameDivHeight1]);

  const frameDiv3Style: CSS.Properties = useMemo(() => {
    return {
      width: frameDivWidth2,
      height: frameDivHeight2,
    };
  }, [frameDivWidth2, frameDivHeight2]);

  const groupDivStyle: CSS.Properties = useMemo(() => {
    return {
      top: groupDivTop,
      left: groupDivLeft,
      width: groupDivWidth,
      height: groupDivHeight,
    };
  }, [groupDivTop, groupDivLeft, groupDivWidth, groupDivHeight]);

  const cornersFramePhotoPictureViStyle: CSS.Properties = useMemo(() => {
    return {
      top: cornersFramePhotoPictureVTop,
      left: cornersFramePhotoPictureVLeft,
      width: cornersFramePhotoPictureVWidth,
      height: cornersFramePhotoPictureVHeight,
    };
  }, [
    cornersFramePhotoPictureVTop,
    cornersFramePhotoPictureVLeft,
    cornersFramePhotoPictureVWidth,
    cornersFramePhotoPictureVHeight,
  ]);

  const cornersFramePhotoPictureVi1Style: CSS.Properties = useMemo(() => {
    return {
      top: cornersFramePhotoPictureVTop1,
      left: cornersFramePhotoPictureVLeft1,
      width: cornersFramePhotoPictureVWidth1,
      height: cornersFramePhotoPictureVHeight1,
    };
  }, [
    cornersFramePhotoPictureVTop1,
    cornersFramePhotoPictureVLeft1,
    cornersFramePhotoPictureVWidth1,
    cornersFramePhotoPictureVHeight1,
  ]);

  const cornersFramePhotoPictureVi2Style: CSS.Properties = useMemo(() => {
    return {
      top: cornersFramePhotoPictureVTop2,
      left: cornersFramePhotoPictureVLeft2,
      width: cornersFramePhotoPictureVWidth2,
      height: cornersFramePhotoPictureVHeight2,
    };
  }, [
    cornersFramePhotoPictureVTop2,
    cornersFramePhotoPictureVLeft2,
    cornersFramePhotoPictureVWidth2,
    cornersFramePhotoPictureVHeight2,
  ]);

  const frameDiv4Style: CSS.Properties = useMemo(() => {
    return {
      width: frameDivWidth3,
      height: frameDivHeight3,
    };
  }, [frameDivWidth3, frameDivHeight3]);

  const frameDiv5Style: CSS.Properties = useMemo(() => {
    return {
      width: frameDivWidth4,
      height: frameDivHeight4,
    };
  }, [frameDivWidth4, frameDivHeight4]);

  const frameDiv6Style: CSS.Properties = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth5,
      height: frameDivHeight5,
    };
  }, [frameDivTop, frameDivLeft, frameDivWidth5, frameDivHeight5]);

  const groupDiv1Style: CSS.Properties = useMemo(() => {
    return {
      width: groupDivWidth1,
      height: groupDivHeight1,
    };
  }, [groupDivWidth1, groupDivHeight1]);

  const agreementBusinessContractDeStyle: CSS.Properties = useMemo(() => {
    return {
      top: agreementBusinessContractTop,
      left: agreementBusinessContractLeft,
      width: agreementBusinessContractWidth,
      height: agreementBusinessContractHeight,
    };
  }, [
    agreementBusinessContractTop,
    agreementBusinessContractLeft,
    agreementBusinessContractWidth,
    agreementBusinessContractHeight,
  ]);

  const groupDiv2Style: CSS.Properties = useMemo(() => {
    return {
      width: groupDivWidth2,
      height: groupDivHeight2,
    };
  }, [groupDivWidth2, groupDivHeight2]);

  const bookCopybookDiaryJournalNoStyle: CSS.Properties = useMemo(() => {
    return {
      top: bookCopybookDiaryJournalNTop,
      left: bookCopybookDiaryJournalNLeft,
      width: bookCopybookDiaryJournalNWidth,
      height: bookCopybookDiaryJournalNHeight,
    };
  }, [
    bookCopybookDiaryJournalNTop,
    bookCopybookDiaryJournalNLeft,
    bookCopybookDiaryJournalNWidth,
    bookCopybookDiaryJournalNHeight,
  ]);

  return (
    <div className={styles.property1variant3} style={property1Variant3Style}>
      <div className={styles.property1variant3Inner} style={frameDiv1Style}>
        <div className={styles.groupWrapper} style={frameDiv2Style}>
          <div className={styles.albumImageLandscapePaintingParent}>
            <div className={styles.albumImageLandscapePainting} />
            <div className={styles.arrowsCartesianCoordinateEu} />
          </div>
        </div>
      </div>
      <div className={styles.property1variant3Child}>
        <div className={styles.groupContainer} style={frameDiv3Style}>
          <div
            className={styles.cornersFramePhotoPictureViParent}
            style={groupDivStyle}
          >
            <div
              className={styles.cornersFramePhotoPictureVi}
              style={cornersFramePhotoPictureViStyle}
            />
            <div
              className={styles.cornersFramePhotoPictureVi1}
              style={cornersFramePhotoPictureVi1Style}
            />
            <div
              className={styles.cornersFramePhotoPictureVi2}
              style={cornersFramePhotoPictureVi2Style}
            />
          </div>
        </div>
      </div>
      <div className={styles.frameDiv} style={frameDiv4Style}>
        <div className={styles.groupWrapper} style={frameDiv5Style}>
          <div className={styles.frameChild} style={frameDiv6Style} />
        </div>
      </div>
      <div className={styles.property1variant3Inner1}>
        <div
          className={styles.agreementBusinessContractDeWrapper}
          style={groupDiv1Style}
        >
          <div
            className={styles.agreementBusinessContractDe}
            style={agreementBusinessContractDeStyle}
          />
        </div>
      </div>
      <div className={styles.property1variant3Inner2}>
        <div
          className={styles.bookCopybookDiaryJournalNoWrapper}
          style={groupDiv2Style}
        >
          <div
            className={styles.bookCopybookDiaryJournalNo}
            style={bookCopybookDiaryJournalNoStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Variant3;
