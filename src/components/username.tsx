import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./username.module.css";

type UsernameType = {
  /** Style props */
  usernameWidth?: Property.Width;
  usernameHeight?: Property.Height;
  usernamePosition?: Property.Position;
  usernameTop?: Property.Top;
  usernameLeft?: Property.Left;
  creatorNameLineHeight?: Property.LineHeight;
};

const Username: FunctionComponent<UsernameType> = ({
  usernameWidth,
  usernameHeight,
  usernamePosition,
  usernameTop,
  usernameLeft,
  creatorNameLineHeight,
}) => {
  const username1Style: CSS.Properties = useMemo(() => {
    return {
      width: usernameWidth,
      height: usernameHeight,
      position: usernamePosition,
      top: usernameTop,
      left: usernameLeft,
    };
  }, [
    usernameWidth,
    usernameHeight,
    usernamePosition,
    usernameTop,
    usernameLeft,
  ]);

  const creatorName1Style: CSS.Properties = useMemo(() => {
    return {
      lineHeight: creatorNameLineHeight,
    };
  }, [creatorNameLineHeight]);

  return (
    <div className={styles.username} style={username1Style}>
      <div className={styles.creatorName} style={creatorName1Style}>
        creator_name
      </div>
      <div className={styles.usernameChild} />
    </div>
  );
};

export default Username;
