import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./component1-variant3.module.css";

type Component1Variant3Type = {
  group1219?: string;
  group1215?: string;
  group1216?: string;
  bookCopybookDiaryJournal?: string;

  /** Style props */
  component1Variant3Position?: Property.Position;
  component1Variant3Width?: Property.Width;
  component1Variant3Height?: Property.Height;
  groupIconWidth?: Property.Width;
  groupIconHeight?: Property.Height;
  groupIconWidth1?: Property.Width;
  groupIconHeight1?: Property.Height;
  groupIconWidth2?: Property.Width;
  groupIconHeight2?: Property.Height;
  agreementBusinessContractWidth?: Property.Width;
  agreementBusinessContractHeight?: Property.Height;
  bookCopybookDiaryJournalNWidth?: Property.Width;
  bookCopybookDiaryJournalNHeight?: Property.Height;
};

const Component1Variant3: FunctionComponent<Component1Variant3Type> = ({
  group1219,
  group1215,
  group1216,
  bookCopybookDiaryJournal,
  component1Variant3Position,
  component1Variant3Width,
  component1Variant3Height,
  groupIconWidth,
  groupIconHeight,
  groupIconWidth1,
  groupIconHeight1,
  groupIconWidth2,
  groupIconHeight2,
  agreementBusinessContractWidth,
  agreementBusinessContractHeight,
  bookCopybookDiaryJournalNWidth,
  bookCopybookDiaryJournalNHeight,
}) => {
  const component1Variant3Style: CSS.Properties = useMemo(() => {
    return {
      position: component1Variant3Position,
      width: component1Variant3Width,
      height: component1Variant3Height,
    };
  }, [
    component1Variant3Position,
    component1Variant3Width,
    component1Variant3Height,
  ]);

  const groupIcon8Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth,
      height: groupIconHeight,
    };
  }, [groupIconWidth, groupIconHeight]);

  const groupIcon9Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth1,
      height: groupIconHeight1,
    };
  }, [groupIconWidth1, groupIconHeight1]);

  const groupIcon10Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth2,
      height: groupIconHeight2,
    };
  }, [groupIconWidth2, groupIconHeight2]);

  const agreementBusinessContractDeIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: agreementBusinessContractWidth,
      height: agreementBusinessContractHeight,
    };
  }, [agreementBusinessContractWidth, agreementBusinessContractHeight]);

  const bookCopybookDiaryJournalNoIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: bookCopybookDiaryJournalNWidth,
      height: bookCopybookDiaryJournalNHeight,
    };
  }, [bookCopybookDiaryJournalNWidth, bookCopybookDiaryJournalNHeight]);

  return (
    <div className={styles.component1variant3} style={component1Variant3Style}>
      <img
        className={styles.component1variant3Child}
        alt=""
        src={group1219}
        style={groupIcon8Style}
      />
      <img
        className={styles.component1variant3Item}
        alt=""
        src={group1215}
        style={groupIcon9Style}
      />
      <img
        className={styles.component1variant3Inner}
        alt=""
        src={group1216}
        style={groupIcon10Style}
      />
      <img
        className={styles.agreementBusinessContractDeIcon}
        alt=""
        src="/559124-agreement-business-contract-deal-hand-shake-icon-1.svg"
        style={agreementBusinessContractDeIconStyle}
      />
      <img
        className={styles.agreementBusinessContractDeIcon}
        alt=""
        src={bookCopybookDiaryJournal}
        style={bookCopybookDiaryJournalNoIconStyle}
      />
    </div>
  );
};

export default Component1Variant3;
