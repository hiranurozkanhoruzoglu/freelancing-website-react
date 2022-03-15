import "./App.css";
import Cards from "./components/cards";
import Category from "./components/category";
import Designs from "./components/designs";
import FirstLook from "./components/first-look";
import Footer from "./components/footer";
import Freelancers from "./components/freelancer";
import Navbar from "./components/navbar";
import Portfolios from "./components/portfolios";
import Subcription from "./components/subsciption";
import WorkCarousel from "./components/works-carousel";
import Reserved from "./components/reserved"

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
        <WorkCarousel />
        <Designs />
        <Category/>
        <Portfolios/>
        <Subcription/>
        <Footer/>
        <Reserved />
      </div>
    </div>
  );
}

export default App;
