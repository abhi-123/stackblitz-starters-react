import { FunctionComponent } from "react";
import styles from "./animated-form-container.module.css";
const AnimatedFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.animatedParent}>
      <div className={styles.animated}>Animated</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupWrapper}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameWrapper}>
              <div className={styles.component4} />
              <div className={styles.component6} />
              <div className={styles.component5} />
              <div className={styles.component7} />
              <div className={styles.component8} />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.component6Icon} alt="" src="/component-2.svg" />
    </div>
  );
};

export default AnimatedFormContainer;
