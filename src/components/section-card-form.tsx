import { FunctionComponent } from "react";
import Property1Default12 from "./property1-default12";
import Property1Variant2 from "./property1-variant2";
import styles from "./section-card-form.module.css";
const SectionCardForm: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frame}>
        <Property1Default12
          modelFile="3D File Information"
          property1DefaultWidth="11.88rem"
          property1DefaultHeight="2.63rem"
          property1DefaultBackground="radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))"
          rectangleDivBackgroundColor="unset"
          rectangleDivBackground="radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))"
          modelFileLeft="6.04%"
          modelFileLineHeight="1.25rem"
        />
        <Property1Default12
          modelFile="Scientific Information"
          property1DefaultWidth="13.25rem"
          property1DefaultHeight="2.63rem"
          property1DefaultBackground="unset"
          rectangleDivBackgroundColor="rgba(255, 255, 255, 0.05)"
          rectangleDivBackground="unset"
          modelFileLeft="5.11%"
          modelFileLineHeight="1.25rem"
        />
      </div>
      <div className={styles.frame1}>
        <img className={styles.plusIcon} alt="" src="/plus6.svg" />
        <div className={styles.photogrammetryParent}>
          <Property1Variant2
            property1Variant2Position="unset"
            property1Variant2BorderRadius="var(--br-8xs) var(--br-8xs) 0px 0px"
            property1Variant2Width="6.25rem"
            property1Variant2Height="2.63rem"
          />
          <div className={styles.publish}>Publish</div>
        </div>
        <div className={styles.filledIn}>1/15 Filled-in</div>
      </div>
    </div>
  );
};

export default SectionCardForm;
