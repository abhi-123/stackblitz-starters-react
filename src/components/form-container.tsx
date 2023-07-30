import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./form-container.module.css";

type FormContainerType = {
  termList?: string;

  /** Style props */
  propTop?: Property.Top;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  termList,
  propTop,
}) => {
  const frameDiv9Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.commonNamesParent} style={frameDiv9Style}>
      <div className={styles.commonNames}>{termList}</div>
      <div className={styles.frameChild} />
      <img className={styles.component2Icon} alt="" src="/component-2.svg" />
    </div>
  );
};

export default FormContainer;
