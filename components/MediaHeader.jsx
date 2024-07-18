function MediaHeader() {
  return (
    <>
      <div className="media-header">
        <span className="media-header__line"></span>
        <div className="media-header__links">
          <a
            href="https://x.com/omrtyyb"
            className="media"
            target='blank'
          >
            <img
              src="/twitter.svg"
              alt="discord"
              className="media__icon"
            />
          </a>
          <a href="https://github.com/omrtayeb" className="media" target='blank'>
            <img src="github.svg" alt="github" className="media__icon" />
          </a>
          <a href="mailto:tayebb.ahmd@gmail.com" className="media">
            <img src="/email.svg" alt="email" className="media__icon" />
          </a>
        </div>
      </div>
    </>
  );
}
export default MediaHeader;


