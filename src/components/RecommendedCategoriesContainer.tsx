import { FunctionComponent } from "react";
import MarketingContainer from "./MarketingContainer";
import styles from "./RecommendedCategoriesContainer.module.css";

const RecommendedCategoriesContainer: FunctionComponent = () => {
  return (
    <div className={styles.mostPopularCategory}>
      <div className={styles.mostPopularCategoryChild} />
      <div className={styles.recommendedCategoriesForContainer}>
        <span className={styles.recommendedCategoriesForContainer1}>
          <span>{`Recommended `}</span>
          <span className={styles.categoriesForYou}>Categories For You!</span>
        </span>
      </div>
      <div className={styles.basedOnYour}>
        Based on your Strength Test, we recommend you these domains
      </div>
      <div className={styles.mostPopularCategoryInner}>
        <div className={styles.frameParent}>
          <div className={styles.pennibParent}>
            <img className={styles.pennibIcon} alt="" src="/pennib.svg" />
            <div className={styles.design}>Design</div>
          </div>
          <div className={styles.arrowuprightWrapper}>
            <img
              className={styles.arrowuprightIcon}
              alt=""
              src="/arrowupright.svg"
            />
          </div>
        </div>
      </div>
      <MarketingContainer
        dimensionCode="/microphonestage.svg"
        categoryIcon="Marketing"
      />
      <MarketingContainer
        dimensionCode="/graph.svg"
        categoryIcon="Blockchain"
        propTop="346.2px"
        propLeft="987px"
      />
      <MarketingContainer
        dimensionCode="/filehtml.svg"
        categoryIcon="Development"
        propTop="259.4px"
        propLeft="764px"
      />
      <MarketingContainer
        dimensionCode="/briefcase.svg"
        categoryIcon="Business"
        propTop="346.2px"
        propLeft="1330px"
      />
      <MarketingContainer
        dimensionCode="/database.svg"
        categoryIcon="Data Science"
        propTop="349.1px"
        propLeft="647px"
      />
    </div>
  );
};

export default RecommendedCategoriesContainer;
