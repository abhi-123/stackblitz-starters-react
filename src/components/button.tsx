import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./button.module.css";

type ButtonType = {
  signUp?: string;

  /** Style props */
  buttonPosition?: Property.Position;
  buttonWidth?: Property.Width;
  buttonHeight?: Property.Height;
  buttonTop?: Property.Top;
  buttonLeft?: Property.Left;
  buttonCursor?: Property.Cursor;
  rectangleDivBackground?: Property.Background;
  rectangleDivBackgroundColor?: Property.BackgroundColor;
  rectangleDivTop?: Property.Top;
  rectangleDivRight?: Property.Right;
  rectangleDivBottom?: Property.Bottom;
  rectangleDivLeft?: Property.Left;
  signUpColor?: Property.Color;
  signUpTop?: Property.Top;
  signUpLeft?: Property.Left;
  signUpLineHeight?: Property.LineHeight;

  /** Action props */
  onButtonContainer1Click?: () => void;
};

const Button: FunctionComponent<ButtonType> = ({
  signUp,
  buttonPosition,
  buttonWidth,
  buttonHeight,
  buttonTop,
  buttonLeft,
  buttonCursor,
  rectangleDivBackground,
  rectangleDivBackgroundColor,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  signUpColor,
  signUpTop,
  signUpLeft,
  signUpLineHeight,
  onButtonContainer1Click,
}) => {
  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      position: buttonPosition,
      width: buttonWidth,
      height: buttonHeight,
      top: buttonTop,
      left: buttonLeft,
      cursor: buttonCursor,
    };
  }, [
    buttonPosition,
    buttonWidth,
    buttonHeight,
    buttonTop,
    buttonLeft,
    buttonCursor,
  ]);

  const rectangleDiv2Style: CSS.Properties = useMemo(() => {
    return {
      background: rectangleDivBackground,
      backgroundColor: rectangleDivBackgroundColor,
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
    };
  }, [
    rectangleDivBackground,
    rectangleDivBackgroundColor,
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
  ]);

  const signUpStyle: CSS.Properties = useMemo(() => {
    return {
      color: signUpColor,
      top: signUpTop,
      left: signUpLeft,
      lineHeight: signUpLineHeight,
    };
  }, [signUpColor, signUpTop, signUpLeft, signUpLineHeight]);

  return (
    <div
      className={styles.button}
      style={buttonStyle}
      onClick={onButtonContainer1Click}
    >
      <div className={styles.buttonChild} style={rectangleDiv2Style} />
      <div className={styles.signUp} style={signUpStyle}>
        {signUp}
      </div>
    </div>
  );
};

export default Button;
