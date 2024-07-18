export default function BottomNav() {
    return (
      <>
          
          <nav className="btm-nav__container">
            <p className="btm-nav__links-item">
              <a href="#home">
                <span className="hashTag">#</span>home
              </a>
            </p>
            <p className="btm-nav__links-item">
              <a href="#about-me">
                <span className="hashTag">#</span>blogposts
              </a>
            </p>
            {/* <p className="btm-nav__links-item">
              <a href="#works">
                <span className="hashTag">#</span>works
              </a>
            </p> */}
            <p className="btm-nav__links-item">
              <a href="#contacts">
                <span className="hashTag">#</span>case studies
              </a>
            </p>
          </nav>
      </>
    );
  }
  
