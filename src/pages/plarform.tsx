import { FunctionComponent, useState, useCallback } from "react";
import ModelShowpage from "../components/model-showpage";
import PortalPopup from "../components/portal-popup";
import UploadForm from "../components/upload-form";
import styles from "./plarform.module.css";
import * as React from 'react';
const Plarform: FunctionComponent = () => {
  const [isModelShowpageOpen, setModelShowpageOpen] = useState(false);
  const [isUploadFormOpen, setUploadFormOpen] = useState(false);

  const onTabContainer1Click = useCallback(() => {
    window.open("/platform-home-page");
  }, []);

  const onTabContainer2Click = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  const onButton44defaultContainer1Click = useCallback(() => {
    window.open("/signup-login");
  }, []);

  const openModelShowpage = useCallback(() => {
    setModelShowpageOpen(true);
  }, []);

  const closeModelShowpage = useCallback(() => {
    setModelShowpageOpen(false);
  }, []);

  const openUploadForm = useCallback(() => {
    setUploadFormOpen(true);
  }, []);

  const closeUploadForm = useCallback(() => {
    setUploadFormOpen(false);
  }, []);

  const onPublishTextClick = useCallback(() => {
    // Please sync "Frame 27106" to the project
  }, []);

  return (
    <>
      <div className={styles.plarform}>
        <div className={styles.frameParent}>
          <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
          <div className={styles.frame}>
            <div className={styles.tabParent}>
              <div className={styles.tab}>
                <div className={styles.grade}>Home page</div>
                <div className={styles.tabChild} />
              </div>
              <div className={styles.tab1} onClick={onTabContainer1Click}>
                <div className={styles.grade}>Platform</div>
                <div className={styles.tabItem} />
              </div>
              <div className={styles.tab1} onClick={onTabContainer2Click}>
                <div className={styles.grade}>About Us</div>
                <div className={styles.tabItem} />
              </div>
            </div>
            <div className={styles.frame1}>
              <div className={styles.button44default}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.newModule}>Log In</div>
                </div>
              </div>
              <div
                className={styles.button44default1}
                onClick={onButton44defaultContainer1Click}
              >
                <div className={styles.rectangleParent}>
                  <div className={styles.groupItem} />
                  <div className={styles.newModule}>Sign Up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image15Parent}>
          <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
          <div className={styles.frame2}>
            <div className={styles.signUpForTheBiosAppParent}>
              <div className={styles.signUpFor}>Sign up for the BIOS App</div>
              <div className={styles.button44default2}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupItem} />
                  <div className={styles.newModule}>Sign Up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.plarformInner}>
          <div className={styles.frameGroup}>
            <div className={styles.frame3}>
              <div className={styles.biosLineWhiteParent}>
                <img
                  className={styles.biosLineWhiteIcon}
                  alt=""
                  src="/bios-line-white@2x.png"
                />
                <div className={styles.icon24linkedinParent}>
                  <img
                    className={styles.icon24linkedin}
                    alt=""
                    src="/icon24linkedin.svg"
                  />
                  <img
                    className={styles.icon24linkedin}
                    alt=""
                    src="/twitter-2-1.svg"
                  />
                  <img
                    className={styles.icon24linkedin}
                    alt=""
                    src="/icon24facebook.svg"
                  />
                </div>
              </div>
              <div className={styles.frame4}>
                <div className={styles.frameContainer}>
                  <div className={styles.frame5}>
                    <div className={styles.contacts}>Contacts</div>
                    <div className={styles.partnerships}>Partnerships</div>
                  </div>
                  <div className={styles.frame6}>
                    <div className={styles.media}>Media</div>
                    <div className={styles.media}>Inquiries</div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.addressParent}>
                    <div className={styles.contacts}>Address</div>
                    <div className={styles.biologicalInformationParent}>
                      <div className={styles.media}>Biological Information</div>
                      <div className={styles.media}>OS Inc.</div>
                    </div>
                  </div>
                  <div className={styles.biologicalInformationParent}>
                    <div className={styles.media}>Palm Harbor, Florida</div>
                    <div className={styles.media}>USA</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frame7}>
              <div className={styles.biologicalInformationOs}>
                © 2021 Biological Information OS Inc. All Rights Reserved
              </div>
              <div className={styles.tabParent}>
                <div className={styles.biologicalInformationOs}>
                  Terms and Conditions
                </div>
                <div className={styles.biologicalInformationOs}>
                  Privacy Statement
                </div>
                <div className={styles.biologicalInformationOs}>
                  Contact us at inquiry
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
          <div className={styles.theScienceCommunityIsFundaParent}>
            <div className={styles.signUpFor}>
              The Science Community is Fundamental to BIOS
            </div>
            <div
              className={styles.biosStrivesTo}
            >{`BIOS strives to give scientists more recognition & increase their social presence. To do this a citation field in the UI will change based on what is selected by the user, it will display data on the concept’s publication(s), authors w/pictures, discovery date & pub. date, organizations involved, & funding. This provides a degree of transparency & recognition in the scientific community that hasn’t existed.`}</div>
          </div>
        </div>
        <div className={styles.strivingToIncreaseEducationParent}>
          <div className={styles.strivingToIncrease}>
            Striving to Increase Education and Ideation
          </div>
          <div
            className={styles.byIncreasingThe}
          >{`By increasing the surface area to volume ratio of research & other scientific information to expand participation and higher level discourse will drive innovation & accelerate science.`}</div>
        </div>
        <div
          className={styles.biosStrivesTo1}
        >{`BIOS strives to set a new standard not only for the field of biology and life science education, but science communication & digital education.`}</div>
        <div className={styles.frame8}>
          <div className={styles.biosWasCreatedContainer}>
            <p
              className={styles.biosWasCreated}
            >{`BIOS was created to connect our scientific & non-scientific communities, to provide an accessible & visual resource for scientific education, communication, & discovery. `}</p>
            <p
              className={styles.biosWasCreated}
            >{`Share your 3D models & provide a more inclusive way discuss scientific breakthroughs and new understandings.`}</p>
          </div>
          <div className={styles.publishForEveryone}>Publish For Everyone</div>
          <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
          <div className={styles.aPlatformFor}>
            A Platform for 3D Life Sciences
          </div>
          <img
            className={styles.rotatingEarthAnimatedTranspIcon}
            alt=""
            src="/rotating-earth-animated-transparent-1@2x.png"
          />
          <div className={styles.takeALook} onClick={openModelShowpage}>
            Take a Look!
          </div>
        </div>
        <div className={styles.frame9}>
          <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
          <div className={styles.thisIsAContainer}>
            <p
              className={styles.thisIsA}
            >{`This is a platform for passionate & skilled science 3D modelers, animators, & communicators to host their data-based 3D models & animations to improve & provide a new dimension for science communication.`}</p>
            <p className={styles.thisIsA}>&nbsp;</p>
            <p
              className={styles.thisIsA}
            >{`We support our science community by providing a new platform to publish findings & data-based 3D models to articulate better.`}</p>
            <p className={styles.thisIsA}>&nbsp;</p>
            <p
              className={styles.thisIsA}
            >{`BIOS aims to facilitate more conversations and catalyze new ideas in students, researchers, & scientists.`}</p>
          </div>
        </div>
        <div className={styles.frame10}>
          <img
            className={styles.arrowCircleDownLineMarkerIcon}
            alt=""
            src="/2726652-arrow-circle-down-line-marker-icon-1.svg"
          />
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild} />
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
          </div>
          <div className={styles.frame11}>
            <div className={styles.clickSignUp}>
              Click ‘Sign Up’ in the top right of the site to create a profile:
            </div>
            <div className={styles.uploadAProfileContainer}>
              <ul className={styles.uploadAProfile}>Upload a profile pic</ul>
            </div>
            <div className={styles.inputYourInformationContainer}>
              <ul className={styles.uploadAProfile}>Input your information</ul>
            </div>
            <div className={styles.addYourHandleContainer}>
              <ul
                className={styles.uploadAProfile}
              >{`Add your handle or URL to other media platforms! `}</ul>
            </div>
            <div className={styles.frame12}>
              <div className={styles.step1}>Step 1:</div>
              <div className={styles.profileCreation}>Profile Creation</div>
            </div>
          </div>
          <div className={styles.frame13}>
            <div className={styles.signUpHere}>Sign Up Here!</div>
            <div className={styles.frame14}>
              <div className={styles.frameItem} />
              <div className={styles.createAnAccount}>Create an Account</div>
              <img
                className={styles.cartoonComicDynamicUnderlinIcon}
                alt=""
                src="/1863638-cartoon-comic-dynamic-underline-icon-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frame15}>
          <div className={styles.frame16}>
            <div className={styles.frame17}>
              <img
                className={styles.uploadForm1}
                alt=""
                src="/upload-form-1@2x.png"
              />
            </div>
            <div className={styles.uploadForm11Wrapper}>
              <img
                className={styles.uploadForm11}
                alt=""
                src="/upload-form1-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.frame18}>
            <div className={styles.moreDataContainer}>
              <ul
                className={styles.uploadAProfile}
              >{`More data & info provided results in a higher model quality rating and increased likeliness of use & interactions.`}</ul>
            </div>
            <div className={styles.fillOutTheContainer}>
              <ul className={styles.uploadAProfile}>
                Fill out the form (saves automatically).
              </ul>
            </div>
            <div className={styles.cautionTheLargerContainer}>
              <p className={styles.biosWasCreated}>
                <b className={styles.caution}>Caution</b>
                <span className={styles.span}>{`: `}</span>
                <span>{`The larger the file, the longer the upload & the higher the likelihood of having to re-upload.`}</span>
              </p>
              <p
                className={styles.biosWasCreated}
              >{`Size doesn’t matter, accurate models do! Feel free to upload those massive models! `}</p>
              <p className={styles.biosWasCreated}>
                We do our best to make this a non-issue.
              </p>
            </div>
            <div className={styles.frame19}>
              <div className={styles.step1}>Step 2:</div>
              <div className={styles.uploadContent}>Upload Content</div>
            </div>
            <div className={styles.frame20}>
              <div className={styles.onYourProfile}>
                On your profile page, select .
              </div>
              <div className={styles.button44default3} onClick={openUploadForm}>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.newModule3}>Upload Model</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frame21}>
              <div className={styles.grade}>
                <ul className={styles.uploadAProfile}>
                  Click to make your upload public.
                </ul>
              </div>
              <div className={styles.photogrammetryParent}>
                <div className={styles.photogrammetry} />
                <div className={styles.publish} onClick={onPublishTextClick}>
                  Publish
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame22}>
          <img className={styles.image14Icon1} alt="" src="/image-141@2x.png" />
          <div className={styles.frame23}>
            <div className={styles.afterEmailConfirmationContainer}>
              <ul className={styles.uploadAProfile}>
                After email confirmation your model/animation will be available
                for everyone.
              </ul>
            </div>
            <div className={styles.youMayUpdateContainer}>
              <ul
                className={styles.uploadAProfile}
              >{`You may update your information on the model at any time & make changes.`}</ul>
            </div>
            <div className={styles.shareYourContentContainer}>
              <ul
                className={styles.uploadAProfile}
              >{`Share your content everywhere by linking! Tweet, Instagram, Thread, video, post on substack, & cite it in publications! `}</ul>
            </div>
            <div className={styles.ifYouHaveContainer}>
              {`If you have any questions, please reach out to `}
              <span className={styles.here}>here</span>.
            </div>
            <div className={styles.frame24}>
              <div className={styles.step1}>Step 3:</div>
              <div className={styles.uploadContent}>Share your content!</div>
            </div>
          </div>
        </div>
      </div>
      {isModelShowpageOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModelShowpage}
        >
          <ModelShowpage onClose={closeModelShowpage} />
        </PortalPopup>
      )}
      {isUploadFormOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUploadForm}
        >
          <UploadForm onClose={closeUploadForm} />
        </PortalPopup>
      )}
    </>
  );
};

export default Plarform;
