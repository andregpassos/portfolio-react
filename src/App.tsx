import "./App.scss";
import FeaturedWorks from "./components/featured-works";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeBanner from "./components/home-banner";
import PostCard from "./components/post-card-container";

function App() {
  return (
    <>
      <Header />
      <div className="containerPrincipal">
        <HomeBanner />
        <PostCard />
        <FeaturedWorks />
        <Footer />
      </div>
    </>
  );
}

export default App;
