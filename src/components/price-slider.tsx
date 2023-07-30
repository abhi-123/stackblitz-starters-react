import { FunctionComponent } from "react";
import styles from "./price-slider.module.css";
const PriceSlider: FunctionComponent = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.bg} />
      <div className={styles.fill}>
        <div className={styles.knobMax}>
          <div className={styles.ellipse} />
          <div className={styles.tooltip}>
            <img className={styles.bgIcon} alt="" src="/bg.svg" />
            <div className={styles.value}>300</div>
          </div>
        </div>
        <div className={styles.knobMin}>
          <div className={styles.ellipse} />
          <div className={styles.tooltip}>
            <img className={styles.bgIcon} alt="" src="/bg.svg" />
            <div className={styles.value1}>60</div>
          </div>
        </div>
      </div>
      <div className={styles.stepsScaled}>
        <div className={styles.div}>
          <div className={styles.div1}>0</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>1</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div5}>2</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div7}>3</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div1}>4</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>5</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div5}>6</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>7</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div5}>8</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div7}>9</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div21}>10</div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
