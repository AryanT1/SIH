import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContainerCardForm.module.css";

type ContainerCardFormType = {
  imageId?: string;
  expertImageUrl?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const ContainerCardForm: FunctionComponent<ContainerCardFormType> = ({
  imageId,
  expertImageUrl,
  propLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.groupChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameChild} alt="" src={imageId} />
          <div className={styles.jacobJonesParent}>
            <div className={styles.jacobJones}>Jacob Jones</div>
            <div className={styles.uiUxDesignExpart}>{expertImageUrl}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCardForm;
