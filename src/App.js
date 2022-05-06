import "./App.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Shorter from "./components/Shorter.js";
import Features from "./components/Features.js";
import CallToAction from "./components/CallToAction.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Shorter />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
