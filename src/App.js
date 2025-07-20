import "./App.css";
import Business from "./Business/Business";
import Footer from "./FooterSection/Footer";
import HeaderSection from "./HeaderSection/HeaderSection";
import HomePage from "./HomePage/HomePage";
import Products from "./Products/Products";
import Services from "./Services/Services";

function App() {
  return (
    <div>
      <HeaderSection />
      <HomePage />
      <Products />
      <Services />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
