import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./small-rank-icons.module.css";

type SmallRankIconsType = {
  /** Style props */
  smallRankIconsPosition?: Property.Position;
  smallRankIconsTop?: Property.Top;
  smallRankIconsLeft?: Property.Left;
  groupIconWidth?: Property.Width;
  groupIconHeight?: Property.Height;
  groupIconWidth1?: Property.Width;
  groupIconHeight1?: Property.Height;
  groupIconWidth2?: Property.Width;
  groupIconHeight2?: Property.Height;
  groupIconWidth3?: Property.Width;
  groupIconHeight3?: Property.Height;
  groupIconWidth4?: Property.Width;
  groupIconHeight4?: Property.Height;
};

const SmallRankIcons: FunctionComponent<SmallRankIconsType> = ({
  smallRankIconsPosition,
  smallRankIconsTop,
  smallRankIconsLeft,
  groupIconWidth,
  groupIconHeight,
  groupIconWidth1,
  groupIconHeight1,
  groupIconWidth2,
  groupIconHeight2,
  groupIconWidth3,
  groupIconHeight3,
  groupIconWidth4,
  groupIconHeight4,
}) => {
  const smallRankIconsStyle: CSS.Properties = useMemo(() => {
    return {
      position: smallRankIconsPosition,
      top: smallRankIconsTop,
      left: smallRankIconsLeft,
    };
  }, [smallRankIconsPosition, smallRankIconsTop, smallRankIconsLeft]);

  const groupIcon3Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth,
      height: groupIconHeight,
    };
  }, [groupIconWidth, groupIconHeight]);

  const groupIcon4Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth1,
      height: groupIconHeight1,
    };
  }, [groupIconWidth1, groupIconHeight1]);

  const groupIcon5Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth2,
      height: groupIconHeight2,
    };
  }, [groupIconWidth2, groupIconHeight2]);

  const groupIcon6Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth3,
      height: groupIconHeight3,
    };
  }, [groupIconWidth3, groupIconHeight3]);

  const groupIcon7Style: CSS.Properties = useMemo(() => {
    return {
      width: groupIconWidth4,
      height: groupIconHeight4,
    };
  }, [groupIconWidth4, groupIconHeight4]);

  return (
    <div className={styles.smallRankIcons} style={smallRankIconsStyle}>
      <img
        className={styles.smallRankIconsChild}
        alt=""
        src="/group-1230.svg"
        style={groupIcon3Style}
      />
      <img
        className={styles.smallRankIconsChild}
        alt=""
        src="/group-1231.svg"
        style={groupIcon4Style}
      />
      <img
        className={styles.smallRankIconsChild}
        alt=""
        src="/group-1232.svg"
        style={groupIcon5Style}
      />
      <img
        className={styles.smallRankIconsChild}
        alt=""
        src="/group-1233.svg"
        style={groupIcon6Style}
      />
      <img
        className={styles.smallRankIconsChild}
        alt=""
        src="/group-1234.svg"
        style={groupIcon7Style}
      />
    </div>
  );
};

export default SmallRankIcons;
