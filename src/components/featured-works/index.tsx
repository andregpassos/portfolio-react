import styles from "./styles.module.scss";
import dashboardImg from "../../assets/images/dashboard.png";
import womanImg from "../../assets/images/woman.png";
import charCursiveImg from "../../assets/images/char_cursive.png";

function FeaturedWorks() {
  return (
    <div className={styles.featuredWorksContainer}>
      <h3 className={styles.textRecentPosts}>Featured works</h3>
      <div className={styles.featuredWorkCard}>
        <img className={styles.dashboardImg} src={dashboardImg} />
        <div>
          <a href="/">
            <h1 className={styles.titleFeatWorkCard}>Designing Dashboards</h1>
          </a>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <p className={styles.yearCard}>2020</p>
            <p style={{ marginLeft: "20px", color: "#828282" }}>Dashboard</p>
          </div>
          <p style={{ marginTop: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
            soluta exercitationem quasi sed. Odit, sunt! Tempore velit dicta
            voluptate, aut magnam non culpa temporibus aliquid reiciendis sunt
            alias ab?
          </p>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.featuredWorkCard}>
        <img className={styles.dashboardImg} src={womanImg} />
        <div>
          <a href="/">
            <h1 className={styles.titleFeatWorkCard}>
              Vibrant Portraits of 2020
            </h1>
          </a>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <p className={styles.yearCard}>2020</p>
            <p style={{ marginLeft: "20px", color: "#828282" }}>Illustration</p>
          </div>
          <p style={{ marginTop: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
            soluta exercitationem quasi sed. Odit, sunt! Tempore velit dicta
            voluptate, aut magnam non culpa temporibus aliquid reiciendis sunt
            alias ab?
          </p>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.featuredWorkCard}>
        <img className={styles.dashboardImg} src={charCursiveImg} />
        <div>
          <a href="/">
            <h1 className={styles.titleFeatWorkCard}>
              36 Days of Malayalam type
            </h1>
          </a>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <p className={styles.yearCard}>2020</p>
            <p style={{ marginLeft: "20px", color: "#828282" }}>Typography</p>
          </div>
          <p style={{ marginTop: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
            soluta exercitationem quasi sed. Odit, sunt! Tempore velit dicta
            voluptate, aut magnam non culpa temporibus aliquid reiciendis sunt
            alias ab?
          </p>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}

export default FeaturedWorks;
