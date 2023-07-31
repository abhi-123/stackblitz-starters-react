import { FunctionComponent, useCallback } from "react";
import Field40defaultdropdown from "./field40defaultdropdown";
import Button from "./button";
import styles from "./signup-login.module.css";
import React, { useEffect, useState } from "react";

type SignupLoginType = {
  onClose?: () => void;
};

const SignupLogin: FunctionComponent<SignupLoginType> = ({ onClose }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
 
  const signupHandler = () => {
    //console.log(e, user)
    //e.preventDefault();
    //setFormErrors(validateForm(user));
    setIsSubmit(true);
    //return true;
  };

  const changeHandler = (e:any) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const onButtonContainerClick = useCallback(() => {
    console.log("HEREEEEEEEEEEE")
    // Please sync "My Profile Page" to the project
    signupHandler();
  }, [])
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      /*axios.post("http://localhost:9002/signup/", user).then((res:any) => {
        console.log(res.data.message);
      
      });*/
    }
  });

  return (
    <div className={styles.signupLogin}>
      <img
        className={styles.signupLoginChild}
        alt=""
        src="/images/Rectangle 4044.png"
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
            <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            onChange={changeHandler}
            value={user.fname}
          />
          {/* <p className={styles.error}>{formErrors.fname}</p> */}
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lname}
          />
          {/* <p className={styles.error}>{formErrors.lname}</p> */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          />
          {/* <p className={styles.error}>{formErrors.email}</p> */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
          {/* <p className={styles.error}>{formErrors.password}</p> */}
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.cpassword}
          />
          {/* <p className={styles.error}>{formErrors.cpassword}</p> */}
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
              buttonCursor="pointer"
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
              onButtonContainer1Click={onButtonContainerClick}
            />
            <button className={styles.button_common} onClick={signupHandler}>
            Register
          </button>
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
                    src="/images/ORCIDiD_icon128x128 1.png"
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
                    src="/images/Icon.svg"
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
          src="/images/BIOS_line_white.png"
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
