function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__content">
        <div className="contact__content-paragraph">
          Hey there! Im a freelance ninja on the hunt for new projects. If youve
          got something else in mind or just want to chat, drop me a message.
          Lets embark on this adventure together!
        </div>
        <div className="contact__content-form">
          <p className="contact__content-form-title">Text me here:</p>
          <div className="contact__content-form-item">
            <a
              href="https://github.com/omrtayeb"
              className="media"
              target="blank"
            >
              <img
                src="../res/twitter.svg"
                alt="github"
                className="media__icon"
              />{" "}
            </a>
            <p>X</p>
          </div>
          <div className="contact__content-form-item">
            <a
              href="https://github.com/omrtayeb"
              className="media"
              target="blank"
            >
              <img
                src="../res/linkedin.svg"
                alt="github"
                className="media__icon"
              />{" "}
            </a>
            <p>Linkedin</p>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
