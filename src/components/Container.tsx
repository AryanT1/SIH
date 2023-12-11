import { FunctionComponent } from "react";
import styles from "./Container.module.css";

const Container: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.sample46Parent}>
            <div className={styles.sample46}>
              <div className={styles.sample46Child} />
              <div className={styles.saly2}>
                <img className={styles.saly2Icon} alt="" src="/saly2@2x.png" />
              </div>
            </div>
            <div className={styles.variousVersionsHave}>
              Various versions have evolved daf
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.starParent}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                </div>
              </div>
              <div className={styles.div}>(20)</div>
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/line-1.svg" />
            <div className={styles.enrolParent}>
              <div className={styles.enrol}>Resume</div>
              <div className={styles.arrowuprightWrapper}>
                <img
                  className={styles.starIcon}
                  alt=""
                  src="/arrowupright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.design}>Design</div>
      </div>
    </div>
  );
};

export default Container;
