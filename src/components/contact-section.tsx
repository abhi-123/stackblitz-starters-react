import { FunctionComponent } from "react";
import styles from "./contact-section.module.css";
const ContactSection: FunctionComponent = () => {
  return (
    <div className={styles.platformHomePageInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.frameParent}>
          <div className={styles.icon24linkedinParent}>
            <img
              className={styles.icon24linkedin}
              alt=""
              src="/icon24linkedin1.svg"
            />
            <img
              className={styles.icon24linkedin}
              alt=""
              src="/twitter-2-1.svg"
            />
          </div>
          <img
            className={styles.biosLineWhiteIcon}
            alt=""
            src="/bios-line-white3@2x.png"
          />
        </div>
        <div className={styles.biologicalInformationOs}>
          © 2021 Biological Information OS Inc. All Rights Reserved
        </div>
        <div className={styles.termsAndConditionsParent}>
          <div className={styles.termsAndConditions}>Terms and Conditions</div>
          <div className={styles.termsAndConditions}>Privacy Statement</div>
          <div className={styles.termsAndConditions}>Contact us at inquiry</div>
        </div>
        <div className={styles.partnershipsParent}>
          <div className={styles.partnerships}>Partnerships</div>
          <div className={styles.media}>Media</div>
          <div className={styles.inquiries}>Inquiries</div>
          <div className={styles.contacts}>Contacts</div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <div className={styles.groupWrapper}>
              <div className={styles.biologicalInformationParent}>
                <div className={styles.biologicalInformation}>
                  Biological Information
                </div>
                <div className={styles.osInc}>OS Inc.</div>
              </div>
            </div>
            <div className={styles.contacts}>Address</div>
          </div>
          <div className={styles.palmHarborFloridaParent}>
            <div className={styles.biologicalInformation}>
              Palm Harbor, Florida
            </div>
            <div className={styles.osInc}>USA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
