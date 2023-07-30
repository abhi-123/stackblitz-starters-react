import { FunctionComponent } from "react";
import Field40defaultdropdown from "./field40defaultdropdown";
import Button from "./button";
import styles from "./signup-login.module.css";

type SignupLoginType = {
  onClose?: () => void;
};

const SignupLogin: FunctionComponent<SignupLoginType> = ({ onClose }) => {
  return (
    <div className={styles.signupLogin}>
      <img
        className={styles.signupLoginChild}
        alt=""
        src="/rectangle-40442.svg"
      />
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.haveAnAccountContainer}>
            <span>{`Have an Account? `}</span>
            <span className={styles.logIn}>Log In</span>
          </b>
          <div className={styles.frameParent}>
            <div className={styles.signUpWrapper}>
              <div className={styles.signUp}>Sign Up</div>
            </div>
            <div className={styles.fillTheInfo}>
              Fill the Info to create an account
            </div>
            <Field40defaultdropdown
              email="Enter email"
              showViewFillIcon={false}
              field40defaultdropdownPosition="relative"
              field40defaultdropdownWidth="396px"
              field40defaultdropdownTop="unset"
              field40defaultdropdownRight="unset"
              field40defaultdropdownLeft="unset"
              field40defaultdropdownHeight="40px"
              field40defaultdropdownBottom="unset"
              rectangleDivBackgroundColor="unset"
              rectangleDivBorder="1px solid var(--grey-20)"
              rectangleDivTop="0px"
              rectangleDivRight="0px"
              rectangleDivBottom="0px"
              rectangleDivLeft="0px"
              emailColor="#ccd2e3"
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
            <Field40defaultdropdown
              email="Enter your name"
              showViewFillIcon={false}
              field40defaultdropdownPosition="relative"
              field40defaultdropdownWidth="396px"
              field40defaultdropdownTop="unset"
              field40defaultdropdownRight="unset"
              field40defaultdropdownLeft="unset"
              field40defaultdropdownHeight="40px"
              field40defaultdropdownBottom="unset"
              rectangleDivBackgroundColor="unset"
              rectangleDivBorder="1px solid var(--grey-20)"
              rectangleDivTop="0px"
              rectangleDivRight="0px"
              rectangleDivBottom="0px"
              rectangleDivLeft="0px"
              emailColor="#ccd2e3"
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
            <Field40defaultdropdown
              email="Enter username"
              showViewFillIcon={false}
              field40defaultdropdownPosition="relative"
              field40defaultdropdownWidth="396px"
              field40defaultdropdownTop="unset"
              field40defaultdropdownRight="unset"
              field40defaultdropdownLeft="unset"
              field40defaultdropdownHeight="40px"
              field40defaultdropdownBottom="unset"
              rectangleDivBackgroundColor="unset"
              rectangleDivBorder="1px solid var(--grey-20)"
              rectangleDivTop="0px"
              rectangleDivRight="0px"
              rectangleDivBottom="0px"
              rectangleDivLeft="0px"
              emailColor="#ccd2e3"
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
            <Field40defaultdropdown
              email="Enter password"
              showViewFillIcon
              field40defaultdropdownPosition="relative"
              field40defaultdropdownWidth="396px"
              field40defaultdropdownTop="unset"
              field40defaultdropdownRight="unset"
              field40defaultdropdownLeft="unset"
              field40defaultdropdownHeight="40px"
              field40defaultdropdownBottom="unset"
              rectangleDivBackgroundColor="unset"
              rectangleDivBorder="1px solid var(--grey-20)"
              rectangleDivTop="0px"
              rectangleDivRight="0px"
              rectangleDivBottom="0px"
              rectangleDivLeft="0px"
              emailColor="#ccd2e3"
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
            <Field40defaultdropdown
              email="Repeat password"
              showViewFillIcon={false}
              field40defaultdropdownPosition="relative"
              field40defaultdropdownWidth="396px"
              field40defaultdropdownTop="unset"
              field40defaultdropdownRight="unset"
              field40defaultdropdownLeft="unset"
              field40defaultdropdownHeight="40px"
              field40defaultdropdownBottom="unset"
              rectangleDivBackgroundColor="unset"
              rectangleDivBorder="1px solid var(--grey-20)"
              rectangleDivTop="0px"
              rectangleDivRight="0px"
              rectangleDivBottom="0px"
              rectangleDivLeft="0px"
              emailColor="#ccd2e3"
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
            <div className={styles.component8}>
              <div
                className={styles.iAgreeTo}
              >{`I agree to the terms & conditions of BIOS Inc.`}</div>
              <div className={styles.component8Child} />
            </div>
            <Button
              signUp="Sign Up"
              buttonPosition="relative"
              buttonWidth="396px"
              buttonHeight="40px"
              buttonTop="unset"
              buttonLeft="unset"
              buttonCursor="unset"
              rectangleDivBackground="unset"
              rectangleDivBackgroundColor="#fff"
              rectangleDivTop="0px"
              rectangleDivRight="0px"
              rectangleDivBottom="0px"
              rectangleDivLeft="0px"
              signUpColor="#0040d3"
              signUpTop="calc(50% - 12px)"
              signUpLeft="8px"
              signUpLineHeight="24px"
            />
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.vectorParent}>
              <img className={styles.groupItem} alt="" src="/line-1.svg" />
              <div className={styles.or}>or</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper}>
                <div className={styles.buttons48blueWithIconDefaParent}>
                  <div className={styles.buttons48blueWithIconDefa}>
                    <div className={styles.buttons48blueWithIconDefaChild} />
                    <div className={styles.icon24googleParent}>
                      <img
                        className={styles.icon24google}
                        alt=""
                        src="/icon24google.svg"
                      />
                      <div className={styles.useGoogle}>Use Google</div>
                    </div>
                  </div>
                  <div className={styles.buttons48blueWithIconDefa1}>
                    <div className={styles.buttons48blueWithIconDefaChild} />
                    <div className={styles.useFacebookParent}>
                      <div className={styles.useFacebook}>Use Facebook</div>
                      <img
                        className={styles.facebook1Icon}
                        alt=""
                        src="/facebook-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild} />
                <div className={styles.orcididIcon128x1281Parent}>
                  <img
                    className={styles.orcididIcon128x1281}
                    alt=""
                    src="/orcidid-icon128x128-1@2x.png"
                  />
                  <div className={styles.useOrcid}>Use ORCiD</div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild} />
                <div className={styles.frameGroup}>
                  <img
                    className={styles.groupInner}
                    alt=""
                    src="/frame-5.svg"
                  />
                  <div className={styles.accessThroughYour}>
                    Access Through Your Institution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.biosLineWhiteIcon}
          alt=""
          src="/bios-line-white1@2x.png"
        />
      </div>
      <div className={styles.div}>*</div>
      <div className={styles.div1}>*</div>
      <div className={styles.div2}>*</div>
      <div className={styles.div3}>*</div>
      <div className={styles.div4}>*</div>
    </div>
  );
};

export default SignupLogin;
