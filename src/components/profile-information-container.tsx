import { FunctionComponent, useCallback } from "react";
import ProfileForm from "./profile-form";
import Property1Default3 from "./property1-default3";
import Property1Variant21 from "./property1-variant21";
import Button from "./button";
import styles from "./profile-information-container.module.css";
const ProfileInformationContainer: FunctionComponent = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "My Profile Page" to the project
  }, []);

  return (
    <div className={styles.property1default}>
      <div className={styles.property1defaultChild} />
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
      <Property1Default3
        property1DefaultWidth="2.25rem"
        property1DefaultHeight="0.88rem"
        property1DefaultPosition="absolute"
        property1DefaultTop="68.88rem"
        property1DefaultLeft="10.25rem"
        iWouldNotLineHeight="0.81rem"
      />
      <Property1Variant21
        iWouldLikeToBeAnAffiliate="I would not like to be an affiliate of BIOS"
        property1Variant2Width="2.25rem"
        property1Variant2Height="0.88rem"
        property1Variant2Position="absolute"
        property1Variant2Top="71rem"
        property1Variant2Left="10.25rem"
        iWouldLikeLineHeight="0.81rem"
        iWouldLikeTop="7.14%"
        iWouldLikeLeft="50%"
        rectangleDivWidth="33.33%"
        rectangleDivTop="14.29%"
        rectangleDivRight="66.67%"
        rectangleDivBottom="0%"
        rectangleDivBackgroundColor="unset"
      />
      <Button
        signUp="Continue to Profile"
        buttonPosition="absolute"
        buttonWidth="24.75rem"
        buttonHeight="2.56rem"
        buttonTop="73.75rem"
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
    </div>
  );
};

export default ProfileInformationContainer;
