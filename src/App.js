import "./App.scss";
import "./scss/main.scss";

import Header from "./comps/Header";
import Hero from "./comps/Hero";
import AboutSection from "./comps/AboutSection";
import Mission from "./comps/Mission";
import Servicessection from "./comps/ServicesSection";
import G11portfoliosection from "./comps/G11PortfolioSection";

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
