import { FunctionComponent } from "react";
import styles from "./access-through-institution-contai.module.css";

type AccessThroughInstitutionContaiType = {
  imageDimensions?: string;
};

const AccessThroughInstitutionContai: FunctionComponent<
  AccessThroughInstitutionContaiType
> = ({ imageDimensions }) => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src={imageDimensions} />
        <div className={styles.or}>or</div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.frameWrapper}>
          <div className={styles.buttons48blueWithIconDefaParent}>
            <div className={styles.buttons48blueWithIconDefa}>
              <div className={styles.buttons48blueWithIconDefaChild} />
              <div className={styles.icon24googleParent}>
                <img
                  className={styles.icon24google}
                  alt=""
                  src="/icon24google1.svg"
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
                  src="/facebook-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
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
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameParent}>
            <img className={styles.groupItem} alt="" src="/frame-51.svg" />
            <div className={styles.accessThroughYour}>
              Access Through Your Institution
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessThroughInstitutionContai;
