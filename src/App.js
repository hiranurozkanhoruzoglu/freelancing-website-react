import "./App.css";
import Cards from "./components/cards";
import Designs from "./components/designs";
import FirstLook from "./components/first-look";
import Freelancers from "./components/freelancer";
import Navbar from "./components/navbar";
import WorkCarousel from "./components/works-carousel";

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
      </div>
    </div>
  );
}

export default App;
