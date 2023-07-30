import { FunctionComponent } from "react";
import Field40defaultdropdown from "./field40defaultdropdown";
import Button from "./button";
import AccessThroughInstitutionContai from "./access-through-institution-contai";
import styles from "./sign-up-form.module.css";
const SignUpForm: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <b className={styles.notAMemberContainer}>
        <span>{`Not a Member yet? `}</span>
        <span className={styles.signUp}>Sign Up</span>
      </b>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.loginWrapper}>
            <div className={styles.login}>Login</div>
          </div>
          <Field40defaultdropdown
            email="Your email"
            showViewFillIcon={false}
            field40defaultdropdownPosition="relative"
            field40defaultdropdownWidth="24.75rem"
            field40defaultdropdownTop="unset"
            field40defaultdropdownRight="unset"
            field40defaultdropdownLeft="unset"
            field40defaultdropdownHeight="2.5rem"
            field40defaultdropdownBottom="unset"
            rectangleDivBackgroundColor="unset"
            rectangleDivBorder="1px solid var(--grey-20)"
            rectangleDivTop="0rem"
            rectangleDivRight="0rem"
            rectangleDivBottom="0rem"
            rectangleDivLeft="0rem"
            emailColor="#ccd2e3"
            emailLeft="0.75rem"
            emailLineHeight="1.5rem"
            emailTop="calc(50% - 12px)"
            emailFontSize="12px"
            emailDisplay="inline-block"
            emailAlignItems="unset"
            emailWidth="calc(100% - 24px)"
            viewFillIconTop="0.5rem"
            viewFillIconRight="0.75rem"
            viewFillIconWidth="1.5rem"
            viewFillIconHeight="1.5rem"
            viewFillIconPosition="absolute"
            viewFillIconLineBreak="unset"
          />
          <Field40defaultdropdown
            email="Your password"
            showViewFillIcon
            field40defaultdropdownPosition="relative"
            field40defaultdropdownWidth="24.75rem"
            field40defaultdropdownTop="unset"
            field40defaultdropdownRight="unset"
            field40defaultdropdownLeft="unset"
            field40defaultdropdownHeight="2.5rem"
            field40defaultdropdownBottom="unset"
            rectangleDivBackgroundColor="unset"
            rectangleDivBorder="1px solid var(--grey-20)"
            rectangleDivTop="0rem"
            rectangleDivRight="0rem"
            rectangleDivBottom="0rem"
            rectangleDivLeft="0rem"
            emailColor="#ccd2e3"
            emailLeft="0.75rem"
            emailLineHeight="1.5rem"
            emailTop="calc(50% - 12px)"
            emailFontSize="12px"
            emailDisplay="inline-block"
            emailAlignItems="unset"
            emailWidth="calc(100% - 24px)"
            viewFillIconTop="0.5rem"
            viewFillIconRight="0.75rem"
            viewFillIconWidth="1.5rem"
            viewFillIconHeight="1.5rem"
            viewFillIconPosition="absolute"
            viewFillIconLineBreak="unset"
          />
          <div className={styles.forgetPassword}>Forget Password?</div>
          <Button
            signUp="Login"
            buttonPosition="relative"
            buttonWidth="24.75rem"
            buttonHeight="2.5rem"
            buttonTop="unset"
            buttonLeft="unset"
            buttonCursor="unset"
            rectangleDivBackground="unset"
            rectangleDivBackgroundColor="#fff"
            rectangleDivTop="0rem"
            rectangleDivRight="0rem"
            rectangleDivBottom="0rem"
            rectangleDivLeft="0rem"
            signUpColor="#0040d3"
            signUpTop="calc(50% - 12px)"
            signUpLeft="0.5rem"
            signUpLineHeight="1.5rem"
          />
        </div>
        <AccessThroughInstitutionContai imageDimensions="/line-11.svg" />
      </div>
    </div>
  );
};

export default SignUpForm;
