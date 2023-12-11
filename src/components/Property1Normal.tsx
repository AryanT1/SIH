import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Normal.module.css";

type Property1NormalType = {
  socialMediaLogo?: string;

  /** Style props */
  property1NormalBorderRadius?: CSSProperties["borderRadius"];
  property1NormalBorder?: CSSProperties["border"];
  property1NormalPosition?: CSSProperties["position"];
  property1NormalTop?: CSSProperties["top"];
  property1NormalLeft?: CSSProperties["left"];
  property1NormalBackgroundColor?: CSSProperties["backgroundColor"];
  property1NormalHeight?: CSSProperties["height"];
  property1NormalBoxSizing?: CSSProperties["boxSizing"];
  socialMediaLogoOverflow?: CSSProperties["overflow"];
  socialMediaLogoFlexShrink?: CSSProperties["flexShrink"];
};

const Property1Normal: FunctionComponent<Property1NormalType> = ({
  socialMediaLogo,
  property1NormalBorderRadius,
  property1NormalBorder,
  property1NormalPosition,
  property1NormalTop,
  property1NormalLeft,
  property1NormalBackgroundColor,
  property1NormalHeight,
  property1NormalBoxSizing,
  socialMediaLogoOverflow,
  socialMediaLogoFlexShrink,
}) => {
  const property1NormalStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: property1NormalBorderRadius,
      border: property1NormalBorder,
      position: property1NormalPosition,
      top: property1NormalTop,
      left: property1NormalLeft,
      backgroundColor: property1NormalBackgroundColor,
      height: property1NormalHeight,
      boxSizing: property1NormalBoxSizing,
    };
  }, [
    property1NormalBorderRadius,
    property1NormalBorder,
    property1NormalPosition,
    property1NormalTop,
    property1NormalLeft,
    property1NormalBackgroundColor,
    property1NormalHeight,
    property1NormalBoxSizing,
  ]);

  const socialMediaLogoStyle: CSSProperties = useMemo(() => {
    return {
      overflow: socialMediaLogoOverflow,
      flexShrink: socialMediaLogoFlexShrink,
    };
  }, [socialMediaLogoOverflow, socialMediaLogoFlexShrink]);

  return (
    <div className={styles.property1normal} style={property1NormalStyle}>
      <img
        className={styles.socialMediaLogo}
        alt=""
        src={socialMediaLogo}
        style={socialMediaLogoStyle}
      />
    </div>
  );
};

export default Property1Normal;
