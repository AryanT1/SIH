import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MarketingContainer.module.css";

type MarketingContainerType = {
  dimensionCode?: string;
  categoryIcon?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const MarketingContainer: FunctionComponent<MarketingContainerType> = ({
  dimensionCode,
  categoryIcon,
  propTop,
  propLeft,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.mostPopularCategoryInner} style={frameDivStyle}>
      <div className={styles.frameParent}>
        <div className={styles.microphonestageParent}>
          <img
            className={styles.microphonestageIcon}
            alt=""
            src={dimensionCode}
          />
          <div className={styles.marketing}>{categoryIcon}</div>
        </div>
        <div className={styles.arrowuprightWrapper}>
          <img
            className={styles.arrowuprightIcon}
            alt=""
            src="/arrowupright1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingContainer;
