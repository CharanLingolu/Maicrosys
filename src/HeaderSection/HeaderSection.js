import "./HeaderSection.css";

const HeaderSection = () => {
  return (
    <div>
      <nav>
        <header>
          <ul>
            <div className="logo-wrapper">
              <img src="logo.png" className="logo" alt="Logo" />
            </div>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Services</a>

            <div className="dropdown">
              <a href="/">Products</a>
              <div className="dropdown-content">
                <a
                  href="https://www.adaptfin.com/check_payment_app/SPOTLITE"
                  target="blank"
                >
                  Spotilite
                </a>
              </div>
            </div>

            <a href="/">Industries</a>
            <a href="/">Pricing</a>
            <a href="/">Partner with us</a>
            <a href="/">
              <button className="talkBtn">Talk to us</button>
            </a>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default HeaderSection;
