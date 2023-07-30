import { FunctionComponent } from "react";
import styles from "./form-container2.module.css";
const FormContainer2: FunctionComponent = () => {
  return (
    <div className={styles.modelFormatsParent}>
      <div className={styles.modelFormats}>Model Formats</div>
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
              <div className={styles.component9} />
              <div className={styles.component10} />
              <div className={styles.component11} />
              <div className={styles.component12} />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.component3Icon} alt="" src="/component-2.svg" />
    </div>
  );
};

export default FormContainer2;
