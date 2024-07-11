function Header() {
  return (
    <>
      <header className="header-container">
        <div className="header-container__logo">
          <div className="header__item">
            <p>Tayeb</p>
          </div>
        </div>
        <nav className="header-container__links header__links">
          <p className="header__links-item">
            <a href="#home"><span className="hashTag">#</span>home</a>
          </p>
          <p className="header__links-item">
            <a href="#about-me"><span className="hashTag">#</span>about me</a>
          </p>
          <p className="header__links-item">
            <a href="#works"><span className="hashTag">#</span>works</a>
          </p>
          <p className="header__links-item">
            <a href="#contacts"><span className="hashTag">#</span>contacts</a>
          </p>
        </nav>
      </header>
    </>
  );
}

export default Header;
