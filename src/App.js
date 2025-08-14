import "./App.css";
import Business from "./Business/Business";
import Footer from "./FooterSection/Footer";
import HeaderSection from "./HeaderSection/HeaderSection";
import HomePage from "./HomePage/HomePage";
import Inspire from "./Inspire/Inspire";
import Products from "./Products/Products";
import Services from "./Services/Services";

function App() {
  return (
    <div>
      <HeaderSection />
      <HomePage />
      <Products />
      <Services />
      <Inspire />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
