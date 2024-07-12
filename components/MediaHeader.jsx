function MediaHeader() {
  return (
    <>
      <div className="media-header">
        <span className="media-header__line"></span>
        <div className="media-header__links">
          <a
            href="https://discord.com/"
            className="media"
            target='blank'
          >
            <img
              src="../res/discord.svg"
              alt="discord"
              className="media__icon"
            />
          </a>
          <a href="https://github.com/omrtayeb" className="media" target='blank'>
            <img src="../res/github.svg" alt="github" className="media__icon" />
          </a>
          <a href="mailto:tayebb.ahmd@gmail.com" className="media">
            <img src="../res/email.svg" alt="email" className="media__icon" />
          </a>
        </div>
      </div>
    </>
  );
}
export default MediaHeader;


