import Header from "./components/Header";
import Section from "./components/Section";
import Features from "./components/Features";
import FeatureCard from "./components/FeatureCard";
import FeatureMore from "./components/FeatureMore";
import Members from "./components/Members";
import LearnMore from "./components/LearnMore";
import Customers from "./components/Customers";
import Marketing from "./components/Marketing";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins bg-[#ffffff] overflow-x-hidden">
      <Header />
      <Section />
      <Features />
      <FeatureCard />
      <FeatureMore />
      <Members />
      <LearnMore />
      <Customers />
      <Marketing />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
