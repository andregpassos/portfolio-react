import styles from "./styles.module.scss";
import profileImage from "../../assets/images/wolf_head.png";

function HomeBanner() {
  return (
    <div className={styles.homeBannerContainer}>
      <div>
        <h1 className={styles.introText}>Hi, I am Wolf, The Hungry Hunter</h1>
        <p className={styles.descriptionResume}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolor amet ab aliquid. Minima, unde! Illum maxime odio clear quae
          porro commodi! Aspernatur repudiandae illo ex sed officiis adipisci
          incidunt animi?
        </p>
        <button className={styles.btnDownloadResume}>Download Resume</button>
      </div>
      <div>
        <img className={styles.profilePic} src={profileImage} alt="Wolf Head" />
      </div>
    </div>
  );
}

export default HomeBanner;
