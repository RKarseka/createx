import "./App.scss";
import "./scss/main.scss";

import Header from "./js/comps/Header";
import Hero from "./js/comps/Hero";
import AboutSection from "./js/comps/AboutSection";
import Mission from "./js/comps/Mission";
import Servicessection from "./js/comps/ServicesSection";
import G11portfoliosection from "./js/comps/G11PortfolioSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutSection />
      <Mission />
      <Servicessection />
      <G11portfoliosection />
    </div>
  );
}

export default App;
