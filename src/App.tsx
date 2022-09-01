import "./App.scss";
import profilePicture from "./assets/images/wolf_head.png";

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
        <div className="containerInterno">
          <div>
            <h1 className="introText">Hi, I am Wolf, Creative Technologist</h1>
            <p className="descriptionResume">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae dolor amet ab aliquid. Minima, unde! Illum maxime odio
              quae porro commodi! Aspernatur repudiandae illo ex sed officiis
              adipisci incidunt animi?
            </p>
            <button className="btnDownloadResume">Download Resume</button>
          </div>
          <div>
            <img
              className="profilePicture"
              src={profilePicture}
              alt="Wolf Head"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
