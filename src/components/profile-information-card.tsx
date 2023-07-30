import { FunctionComponent, useCallback } from "react";
import ProfileForm from "./profile-form";
import Property1Default3 from "./property1-default3";
import Property1Variant21 from "./property1-variant21";
import Button from "./button";
import Field40defaultdropdown from "./field40defaultdropdown";
import styles from "./profile-information-card.module.css";
const ProfileInformationCard: FunctionComponent = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "My Profile Page" to the project
  }, []);

  return (
    <div className={styles.property1variant2}>
      <div className={styles.property1variant2Child} />
      <div className={styles.profileInformationWrapper}>
        <div className={styles.profileInformation}>Profile Information</div>
      </div>
      <div className={styles.buildYourProfile}>Build your profile</div>
      <ProfileForm
        viewFillIcon={false}
        viewFillIcon1={false}
        viewFillIcon2={false}
        viewFillIcon3={false}
        viewFillIcon4={false}
        viewFillIcon5={false}
        viewFillIcon6={false}
        viewFillIcon7={false}
        viewFillIcon8={false}
        viewFillIcon9={false}
        viewFillIcon10={false}
        viewFillIcon11={false}
        viewFillIcon12={false}
      />
      <div className={styles.div}>*</div>
      <div className={styles.div1}>*</div>
      <div className={styles.div2}>*</div>
      <div className={styles.div3}>*</div>
      <div className={styles.sellerAgreementParent}>
        <Property1Default3
          property1DefaultWidth="2.25rem"
          property1DefaultHeight="0.88rem"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          iWouldNotLineHeight="0.81rem"
        />
        <Property1Variant21
          iWouldLikeToBeAnAffiliate="I would like to be an affiliate of BIOS"
          property1Variant2Width="3.94rem"
          property1Variant2Height="0.88rem"
          property1Variant2Position="relative"
          property1Variant2Top="unset"
          property1Variant2Left="unset"
          iWouldLikeLineHeight="0.81rem"
          iWouldLikeTop="0%"
          iWouldLikeLeft="30.16%"
          rectangleDivWidth="19.05%"
          rectangleDivTop="7.14%"
          rectangleDivRight="80.95%"
          rectangleDivBottom="7.14%"
          rectangleDivBackgroundColor="1px solid #505083"
        />
      </div>
      <Button
        signUp="Continue to Profile"
        buttonPosition="absolute"
        buttonWidth="24.75rem"
        buttonHeight="2.56rem"
        buttonTop="89.81rem"
        buttonLeft="10.13rem"
        buttonCursor="pointer"
        rectangleDivBackground="unset"
        rectangleDivBackgroundColor="#fff"
        rectangleDivTop="0rem"
        rectangleDivRight="0rem"
        rectangleDivBottom="0rem"
        rectangleDivLeft="0rem"
        signUpColor="#0040d3"
        signUpTop="calc(50% - 11.5px)"
        signUpLeft="0.5rem"
        signUpLineHeight="1.5rem"
        onButtonContainer1Click={onButtonContainerClick}
      />
      <img
        className={styles.biosLineWhiteIcon}
        alt=""
        src="/bios-line-white2@2x.png"
      />
      <div className={styles.field40defaultdropdownParent}>
        <Field40defaultdropdown
          email="Email"
          showViewFillIcon={false}
          field40defaultdropdownPosition="absolute"
          field40defaultdropdownWidth="100%"
          field40defaultdropdownTop="0%"
          field40defaultdropdownRight="0%"
          field40defaultdropdownLeft="0%"
          field40defaultdropdownHeight="15.63%"
          field40defaultdropdownBottom="84.38%"
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
          email="Street Address"
          showViewFillIcon={false}
          field40defaultdropdownPosition="absolute"
          field40defaultdropdownWidth="100%"
          field40defaultdropdownTop="21.09%"
          field40defaultdropdownRight="0%"
          field40defaultdropdownLeft="0%"
          field40defaultdropdownHeight="15.63%"
          field40defaultdropdownBottom="63.28%"
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
          email="Street Address 2"
          showViewFillIcon={false}
          field40defaultdropdownPosition="absolute"
          field40defaultdropdownWidth="100%"
          field40defaultdropdownTop="42.19%"
          field40defaultdropdownRight="0%"
          field40defaultdropdownLeft="0%"
          field40defaultdropdownHeight="15.63%"
          field40defaultdropdownBottom="42.19%"
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
          email="City"
          showViewFillIcon={false}
          field40defaultdropdownPosition="absolute"
          field40defaultdropdownWidth="48.48%"
          field40defaultdropdownTop="63.28%"
          field40defaultdropdownRight="51.52%"
          field40defaultdropdownLeft="0%"
          field40defaultdropdownHeight="15.63%"
          field40defaultdropdownBottom="21.09%"
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
          email="Postal / Zip Code"
          showViewFillIcon={false}
          field40defaultdropdownPosition="absolute"
          field40defaultdropdownWidth="48.48%"
          field40defaultdropdownTop="84.38%"
          field40defaultdropdownRight="51.52%"
          field40defaultdropdownLeft="0%"
          field40defaultdropdownHeight="15.63%"
          field40defaultdropdownBottom="0%"
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
          email="Country"
          showViewFillIcon={false}
          field40defaultdropdownPosition="absolute"
          field40defaultdropdownWidth="48.48%"
          field40defaultdropdownTop="84.38%"
          field40defaultdropdownRight="0%"
          field40defaultdropdownLeft="51.52%"
          field40defaultdropdownHeight="15.63%"
          field40defaultdropdownBottom="0%"
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
          email="Region/State/Province"
          showViewFillIcon={false}
          field40defaultdropdownPosition="absolute"
          field40defaultdropdownWidth="48.48%"
          field40defaultdropdownTop="63.28%"
          field40defaultdropdownRight="0%"
          field40defaultdropdownLeft="51.52%"
          field40defaultdropdownHeight="15.63%"
          field40defaultdropdownBottom="21.09%"
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
      </div>
    </div>
  );
};

export default ProfileInformationCard;
