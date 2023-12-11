import { FunctionComponent, useCallback } from "react";
import RecommendedCategoriesContainer from "../components/RecommendedCategoriesContainer";
import Property1Normal from "../components/Property1Normal";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import ContainerChart from "../components/ContainerChart";
import ContainerCardForm from "../components/ContainerCardForm";
import styles from "./UserDash.module.css";

const UserDash: FunctionComponent = () => {
  const onFrameContainer4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.userDash}>
      <div className={styles.userDashChild} />
      <div className={styles.userDashItem} />
      <img className={styles.userDashInner} alt="" src="/polygon-2.svg" />
      <div className={styles.clariFyParent}>
        <i className={styles.clariFy}>
          <span className={styles.clariFyTxt}>
            <span>Clari-</span>
            <span className={styles.fy}>Fy</span>
          </span>
        </i>
        <div className={styles.frameParent}>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.aboutWrapper}>
            <div className={styles.about}>About</div>
          </div>
          <div className={styles.aboutWrapper}>
            <div className={styles.about}>Course</div>
          </div>
          <div className={styles.aboutWrapper}>
            <div className={styles.about}>Blog</div>
          </div>
          <div
            className={styles.contactWrapper}
            onClick={onFrameContainer4Click}
          >
            <div className={styles.about}>Contact</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.lockParent}>
            <img className={styles.lockIcon} alt="" src="/lock.svg" />
            <div className={styles.about}>Logout</div>
          </div>
          <div className={styles.myCoursesWrapper}>
            <div className={styles.myCourses}>My Courses</div>
          </div>
        </div>
      </div>
      <RecommendedCategoriesContainer />
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.studentFeedback}>
        <div className={styles.studentFeedbackChild} />
      </div>
      <div className={styles.rectangleDiv} data-scroll-to="rectangle" />
      <div className={styles.praesentNullaMassa}>
        Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor
        felis.
      </div>
      <div className={styles.call123}>Call : +123 400 123</div>
      <div className={styles.emailExamplemailcom}>Email: example@mail.com</div>
      <div className={styles.contactUs}>Contact Us</div>
      <div className={styles.explore}>Explore</div>
      <div className={styles.category}>Category</div>
      <div className={styles.subscribe}>Subscribe</div>
      <div className={styles.home1}>Home</div>
      <div className={styles.design}>Design</div>
      <div className={styles.about1}>About</div>
      <div className={styles.development}>Development</div>
      <Property1Normal
        socialMediaLogo="/social-media-logo.svg"
        property1NormalBorderRadius="100px"
        property1NormalBorder="unset"
        property1NormalPosition="absolute"
        property1NormalTop="3732px"
        property1NormalLeft="300px"
        property1NormalBackgroundColor="#f1f2f8"
        property1NormalHeight="49px"
        property1NormalBoxSizing="border-box"
        socialMediaLogoOverflow="unset"
        socialMediaLogoFlexShrink="unset"
      />
      <Property1Normal
        socialMediaLogo="/social-media-logo1.svg"
        property1NormalBorderRadius="100px"
        property1NormalBorder="unset"
        property1NormalPosition="absolute"
        property1NormalTop="3732px"
        property1NormalLeft="364px"
        property1NormalBackgroundColor="#f1f2f8"
        property1NormalHeight="49px"
        property1NormalBoxSizing="border-box"
        socialMediaLogoOverflow="hidden"
        socialMediaLogoFlexShrink="0"
      />
      <Property1Normal
        socialMediaLogo="/social-media-logo2.svg"
        property1NormalBorderRadius="100px"
        property1NormalBorder="unset"
        property1NormalPosition="absolute"
        property1NormalTop="3732px"
        property1NormalLeft="428px"
        property1NormalBackgroundColor="#f1f2f8"
        property1NormalHeight="49px"
        property1NormalBoxSizing="border-box"
        socialMediaLogoOverflow="hidden"
        socialMediaLogoFlexShrink="0"
      />
      <Property1Normal
        socialMediaLogo="/social-media-logo3.svg"
        property1NormalBorderRadius="100px"
        property1NormalBorder="unset"
        property1NormalPosition="absolute"
        property1NormalTop="3732px"
        property1NormalLeft="492px"
        property1NormalBackgroundColor="#f1f2f8"
        property1NormalHeight="49px"
        property1NormalBoxSizing="border-box"
        socialMediaLogoOverflow="hidden"
        socialMediaLogoFlexShrink="0"
      />
      <Property1Normal
        socialMediaLogo="/social-media-logo4.svg"
        property1NormalBorderRadius="100px"
        property1NormalBorder="unset"
        property1NormalPosition="absolute"
        property1NormalTop="3732px"
        property1NormalLeft="556px"
        property1NormalBackgroundColor="#f1f2f8"
        property1NormalHeight="49px"
        property1NormalBoxSizing="border-box"
        socialMediaLogoOverflow="hidden"
        socialMediaLogoFlexShrink="0"
      />
      <div className={styles.contact1}>Contact</div>
      <div className={styles.lifestyle}>Lifestyle</div>
      <div className={styles.blog1}>Blog</div>
      <div className={styles.business}>Business</div>
      <div className={styles.music}>Music</div>
      <div className={styles.course1}>Course</div>
      <div className={styles.marketing}>Marketing</div>
      <div className={styles.photography}>Photography</div>
      <div className={styles.loremIpsumHas}>
        Lorem Ipsum has been them an industry printer took a galley make book.
      </div>
      <div className={styles.emailHereWrapper}>
        <div className={styles.emailHere}>Email here</div>
      </div>
      <i className={styles.clariFy1}>
        <span>Clari-</span>
        <span className={styles.fy}>Fy</span>
      </i>
      <div className={styles.subscribeNowWrapper}>
        <div className={styles.home}>Subscribe Now</div>
      </div>
      <div className={styles.userDashChild1} />
      <div className={styles.whatDoYou}>What do you want to learn today?</div>
      <div className={styles.welcomeUser}>Welcome, User!</div>
      <div className={styles.frameDiv}>
        <img className={styles.groupIcon} alt="" src="/group-30.svg" />
      </div>
      <div className={styles.mostPopularCourse}>
        <div className={styles.continueLearning}>
          <span className={styles.clariFyTxt}>
            <span>{`Continue `}</span>
            <span className={styles.learning}>Learning</span>
          </span>
        </div>
        <Container1 />
        <Container />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.sample26Parent}>
                <div className={styles.sample26}>
                  <div className={styles.sample26Child} />
                  <div className={styles.saly26}>
                    <img
                      className={styles.saly26Icon}
                      alt=""
                      src="/saly26@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.variousVersionsHave}>
                  Various versions have evolved daf
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.starParent}>
                      <img className={styles.lockIcon} alt="" src="/star.svg" />
                      <img className={styles.lockIcon} alt="" src="/star.svg" />
                      <img className={styles.lockIcon} alt="" src="/star.svg" />
                      <img className={styles.lockIcon} alt="" src="/star.svg" />
                      <img
                        className={styles.lockIcon}
                        alt=""
                        src="/star1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.div}>(102)</div>
                </div>
              </div>
              <div className={styles.lineParent}>
                <div className={styles.lineDiv} />
                <div className={styles.frameWrapper2}>
                  <div className={styles.enrolParent}>
                    <div className={styles.enrol}>Resume</div>
                    <div className={styles.arrowuprightWrapper}>
                      <img
                        className={styles.lockIcon}
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.business1}>Business</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.sample26Parent}>
                <div className={styles.sample26}>
                  <div className={styles.sample12Child} />
                  <div className={styles.saly12}>
                    <img
                      className={styles.saly26Icon}
                      alt=""
                      src="/saly12@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.variousVersionsHave}>
                  Various versions have evolved daf
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.starParent}>
                      <img className={styles.lockIcon} alt="" src="/star.svg" />
                      <img className={styles.lockIcon} alt="" src="/star.svg" />
                      <img className={styles.lockIcon} alt="" src="/star.svg" />
                      <img className={styles.lockIcon} alt="" src="/star.svg" />
                      <img
                        className={styles.lockIcon}
                        alt=""
                        src="/star1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.div}>(102)</div>
                </div>
              </div>
              <div className={styles.lineParent}>
                <div className={styles.frameChild2} />
                <div className={styles.frameWrapper2}>
                  <div className={styles.enrolParent}>
                    <div className={styles.enrol}>Resume</div>
                    <div className={styles.arrowuprightWrapper}>
                      <img
                        className={styles.lockIcon}
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.business1}>Business</div>
          </div>
        </div>
        <div className={styles.ellipseGroup}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
        </div>
        <div className={styles.caretleftWrapper}>
          <img className={styles.lockIcon} alt="" src="/caretleft.svg" />
        </div>
        <div className={styles.caretrightWrapper}>
          <img className={styles.lockIcon} alt="" src="/caretright.svg" />
        </div>
        <div className={styles.startOffWhere}>Start off where you left</div>
      </div>
      <div className={styles.frameParent4}>
        <div className={styles.knowYourLearningCurveWrapper}>
          <div className={styles.knowYourLearningContainer}>
            <span className={styles.clariFyTxt}>
              <span>{`Know your `}</span>
              <span className={styles.learningCurve}>Learning Curve</span>
            </span>
          </div>
        </div>
        <div
          className={styles.yourCurrentMonths}
        >{`Your Current Month’s Progress vs Previous Months Progress `}</div>
      </div>
      <div className={styles.currentMonth}>Current Month</div>
      <div className={styles.previousMonth}>Previous Month</div>
      <ContainerChart />
      <div className={styles.userDashChild2} />
      <div className={styles.userDashChild3} />
      <div className={styles.basedOnTheContainer}>
        <span>{`Based on the people from `}</span>
        <span className={styles.learning}> Your Institution</span>
      </div>
      <div className={styles.caretrightContainer}>
        <img className={styles.lockIcon} alt="" src="/caretright.svg" />
      </div>
      <div className={styles.yourPeersLiked}>
        Your peers liked these contents, check them out!
      </div>
      <ContainerCardForm
        imageId="/rectangle-16@2x.png"
        expertImageUrl="UI-UX Design Expart"
      />
      <ContainerCardForm
        imageId="/rectangle-161@2x.png"
        expertImageUrl="Social Media Expart"
        propLeft="651px"
      />
      <ContainerCardForm
        imageId="/rectangle-162@2x.png"
        expertImageUrl="Business Idea Expart"
        propLeft="987px"
      />
      <div className={styles.caretleftContainer}>
        <img className={styles.lockIcon} alt="" src="/caretleft.svg" />
      </div>
      <ContainerCardForm
        imageId="/rectangle-163@2x.png"
        expertImageUrl="Photograpy Expart"
        propLeft="1323px"
      />
    </div>
  );
};

export default UserDash;
