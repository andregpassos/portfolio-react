import styles from "./styles.module.scss";
import fbLogo from "../../assets/images/fb.png";
import igLogo from "../../assets/images/ig_30x30.png";
import linkedinLogo from "../../assets/images/Linkedin.png";
import twitterLogo from "../../assets/images/twitter.png";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.linksSocialMedia}>
        <a href="/">
          <img src={fbLogo} alt="facebook" />
        </a>
        <a href="/">
          <img src={igLogo} alt="instagram" />
        </a>
        <a href="/">
          <img src={linkedinLogo} alt="linkedin" />
        </a>
        <a href="/">
          <img src={twitterLogo} alt="twitter" />
        </a>
      </div>
      <p className={styles.copyrightText}>
        Copyright ©2020 All rights reserved
      </p>
    </div>
  );
}

export default Footer;
