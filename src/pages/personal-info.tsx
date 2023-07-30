import { FunctionComponent, useCallback } from "react";
import ProfileInformationContainer from "../components/profile-information-container";
import ProfileInformationCard from "../components/profile-information-card";
import styles from "./personal-info.module.css";
const PersonalInfo: FunctionComponent = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "My Profile Page" to the project
  }, []);

  return (
    <div className={styles.personalInfo}>
      <ProfileInformationContainer />
      <ProfileInformationCard />
    </div>
  );
};

export default PersonalInfo;
