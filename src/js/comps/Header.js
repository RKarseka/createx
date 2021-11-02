// import logo from "../../img/logo.svg";
import logo from "../../img/logo.svg";

const Header = () => {
  return (
    <header className="header header--main">
      <div className="container header__container">
        <a href="##" className="logo">
          <img src={logo} alt="Createx Logo" />
        </a>
        <nav className="nav header__nav">
          <ul className="nav__list list-reset">
            <li className="nav__item">
              <a href="##" className="nav__link">
                About Us
              </a>
            </li>
            <li className="nav__item">
              <a href="##" className="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="##" className="nav__link">
                Work
              </a>
            </li>
            <li className="nav__item">
              <a href="##" className="nav__link">
                News
              </a>
            </li>
            <li className="nav__item">
              <a href="##" className="nav__link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-contacts">
          <a
            href="tel:+4055550128"
            className="header-contacts__link contacts-link contacts-link--call"
          >
            <span className="contacts-link__caption">Call us</span>
            <span className="contacts-link__value">(405) 555-0128</span>
          </a>
          <a
            href="mailto:hello@createx.com"
            className="header-contacts__link contacts-link contacts-link--mail"
          >
            <span className="contacts-link__caption">Talk to us</span>
            <span className="contacts-link__value">hello@createx.com</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
