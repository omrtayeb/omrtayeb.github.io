function Landing() {
  return (
    <>
      <div className="landing-container">
        <div className="landing-content">
          <div className="landing-content__title">
            <h1><span className="hashTagh">Tayeb</span>, here your go-to web wizard and <span className="hashTag">#front-end</span> enthusiast!</h1>
          </div>
          <div className="landing-content__description">
            <p>
            like crafting in minecraft, he builds responsive websites where pixels meet precision and creativity.
            </p>
          </div>
          <a href="mailto:tayebb.ahmd@gmail.com" className="button button--primary">Get in Touch</a>
        </div>
        <div className="landing-graphic">
          <img src="/herodark1.png" className="landing-graphic__img" alt="my photo" />
        </div>
      </div>
    </>
  );
}
export default Landing;

