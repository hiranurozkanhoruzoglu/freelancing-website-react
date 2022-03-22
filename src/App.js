import "./App.css";
import Cards from "./components/cards";
import Categorys from "./components/categorys";
import Designs from "./components/designs";
import FirstLook from "./components/first-look";
import Footer from "./components/footer";
import Freelancers from "./components/freelancer";
import Navbar from "./components/navbar";
import Subcription from "./components/subsciption";
import Reserved from "./components/reserved"
import PortfolioSection from "./components/portfolio-section";

function App() {
  return (
    <div>
      <div className="header">
        <Navbar title="Merhaba" />
        <FirstLook />
      </div>
      <Cards />
      <Freelancers />
      <div className="container" id="design">
        <Designs />
      </div>
      <Categorys categoryName="Category" />
      <PortfolioSection />
      <Subcription />
      <Footer />
      <Reserved />

    </div>
  );
}

export default App;
