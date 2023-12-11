import { FunctionComponent, useCallback } from "react";
import styles from "./Container1.module.css";

const Container1: FunctionComponent = () => {
  const onGroupContainer1Click = useCallback(() => {
    // Please sync "video play0" to the project
  }, []);

  return (
    <div className={styles.rectangleParent} onClick={onGroupContainer1Click}>
      <div className={styles.groupChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.saly1Parent}>
            <img className={styles.saly1Icon} alt="" src="/saly1@2x.png" />
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
              <div className={styles.div}>(15)</div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <div className={styles.enrolParent}>
              <div className={styles.enrol}>Start</div>
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
        <div className={styles.html}>HTML</div>
      </div>
    </div>
  );
};

export default Container1;
