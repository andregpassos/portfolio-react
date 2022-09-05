import "./App.scss";
import profileImage from "./assets/images/wolf_head.png";
import dashboardImg from "./assets/images/dashboard.png";
import womanImg from "./assets/images/woman.png";
import charCursiveImg from "./assets/images/char_cursive.png";
import fbLogo from "./assets/images/fb.png";
import igLogo from "./assets/images/ig_30x30.png";
import linkedinLogo from "./assets/images/Linkedin.png";
import twitterLogo from "./assets/images/twitter.png";

function App() {
  return (
    <>
      <header className="header">
        <a className="headerLink" href="/">
          Works
        </a>
        <a className="headerLink" href="/">
          Blog
        </a>
        <a className="headerLink" href="/">
          Contact
        </a>
      </header>
      <div className="containerPrincipal">
        <div className="homeBannerContainer">
          <div>
            <h1 className="introText">Hi, I am Wolf, The Hungry Hunter</h1>
            <p className="descriptionResume">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae dolor amet ab aliquid. Minima, unde! Illum maxime odio
              clear quae porro commodi! Aspernatur repudiandae illo ex sed
              officiis adipisci incidunt animi?
            </p>
            <button className="btnDownloadResume">Download Resume</button>
          </div>
          <div>
            <img className="profilePic" src={profileImage} alt="Wolf Head" />
          </div>
        </div>
        <div className="postCardContainer">
          <div>
            <div className="topPostCardContainer">
              <h3 className="textRecentPosts">Recent posts</h3>
              <a className="headerLink linkSmall" href="/">
                View all
              </a>
            </div>
            <div className="cardsContainer">
              <div className="card">
                <h3 className="titleCard">
                  Making a design system from scratch
                </h3>
                <div className="textCard">
                  <p className="dateCard">12 Feb 2020</p>
                  <p className="dateCard">|</p>
                  <p className="dateCard">Design, Pattern</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  voluptatum asperiores voluptatem facere impedit sunt,
                  similique ut voluptas, rerum nam, quisquam quos maiores
                  tempore nesciunt cupiditate. Praesentium sequi error quam?
                </p>
              </div>
              <div className="card">
                <h3 className="titleCard">
                  Creating pixel perfect icons in Figma
                </h3>
                <div className="textCard">
                  <p className="dateCard">12 Feb 2020</p>
                  <p className="dateCard">|</p>
                  <p className="dateCard">Figma, Icon Design</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  voluptatum asperiores voluptatem facere impedit sunt,
                  similique ut voluptas, rerum nam, quisquam quos maiores
                  tempore nesciunt cupiditate. Praesentium sequi error quam?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="featuredWorksContainer">
          <h3 className="textRecentPosts">Featured works</h3>
          <div className="featuredWorkCard">
            <img className="dashboardImg" src={dashboardImg} />
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <h1 className="titleFeatWorkCard">Designing Dashboards</h1>
              </a>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <p className="yearCard">2020</p>
                <p style={{ marginLeft: "20px", color: "#828282" }}>
                  Dashboard
                </p>
              </div>
              <p style={{ marginTop: "20px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eum soluta exercitationem quasi sed. Odit, sunt! Tempore velit
                dicta voluptate, aut magnam non culpa temporibus aliquid
                reiciendis sunt alias ab?
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="featuredWorkCard">
            <img className="dashboardImg" src={womanImg} />
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <h1 className="titleFeatWorkCard">Vibrant Portraits of 2020</h1>
              </a>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <p className="yearCard">2020</p>
                <p style={{ marginLeft: "20px", color: "#828282" }}>
                  Illustration
                </p>
              </div>
              <p style={{ marginTop: "20px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eum soluta exercitationem quasi sed. Odit, sunt! Tempore velit
                dicta voluptate, aut magnam non culpa temporibus aliquid
                reiciendis sunt alias ab?
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="featuredWorkCard">
            <img className="dashboardImg" src={charCursiveImg} />
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <h1 className="titleFeatWorkCard">36 Days of Malayalam type</h1>
              </a>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <p className="yearCard">2020</p>
                <p style={{ marginLeft: "20px", color: "#828282" }}>
                  Typography
                </p>
              </div>
              <p style={{ marginTop: "20px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eum soluta exercitationem quasi sed. Odit, sunt! Tempore velit
                dicta voluptate, aut magnam non culpa temporibus aliquid
                reiciendis sunt alias ab?
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="footerContainer">
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
          <p className="copyrightText">Copyright ©2020 All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default App;
