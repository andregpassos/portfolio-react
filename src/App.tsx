import "./App.scss";
import profileImage from "./assets/images/wolf_head.png";

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
              quae porro commodi! Aspernatur repudiandae illo ex sed officiis
              adipisci incidunt animi?
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
            <p className="descriptionResume">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae dolor amet ab aliquid. Minima, unde! Illum maxime odio
              quae porro commodi! Aspernatur repudiandae illo ex sed officiis
              adipisci incidunt animi?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
