function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__content">
        <div className="contact__content-paragraph">
          Hey there! Im a freelance ninja on the hunt for new projects. If youve
          got something else in mind or just want to chat, drop me a message.
          Lets embark on this adventure together!!
        </div>
        <div className="contact__content-form">
          <p className="contact__content-form-title">Text me here:</p>
            <a
              href="https://x.com/omrtyyb"
              className="contact__content-form-item"
              target="blank"
            >
          <div className="contact__content-form-item-media"
           >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="contact__content-form-item-media"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-svg"
              >
                <path
                  d="M11.2249 26C19.9045 26 24.6526 18.6883 24.6526 12.3587C24.6526 12.1541 24.6526 11.9466 24.6439 11.742C25.5683 11.0617 26.3661 10.2194 27 9.25459C26.1365 9.64165 25.2215 9.89676 24.2846 10.0116C25.2715 9.41189 26.0106 8.46827 26.3646 7.35615C25.4374 7.91461 24.4226 8.30664 23.3646 8.51509C22.6533 7.74493 21.712 7.23473 20.6866 7.0635C19.6612 6.89228 18.6089 7.06959 17.6927 7.56797C16.7764 8.06635 16.0474 8.85799 15.6185 9.82026C15.1896 10.7825 15.0848 11.8617 15.3203 12.8907C13.444 12.795 11.6084 12.2995 9.93262 11.4362C8.25682 10.5728 6.77823 9.36104 5.59275 7.87935C4.99093 8.93611 4.80726 10.1861 5.07905 11.3756C5.35085 12.565 6.05772 13.6047 7.05612 14.2835C6.30796 14.2576 5.57625 14.0534 4.92 13.6872V13.753C4.92129 14.86 5.2985 15.9326 5.98788 16.7895C6.67726 17.6464 7.63651 18.2351 8.7035 18.4559C8.2985 18.5694 7.88014 18.6259 7.46006 18.624C7.16391 18.6249 6.86836 18.597 6.57744 18.5407C6.87901 19.4937 7.46621 20.3269 8.25679 20.9236C9.04738 21.5203 10.0018 21.8507 10.9863 21.8685C9.3138 23.2039 7.24789 23.9282 5.12125 23.9247C4.74652 23.9263 4.37206 23.9044 4 23.859C6.15843 25.258 8.66512 26.0008 11.2249 26Z"
                  // fill="#ABB2BF"
                />
              </svg>
            </div>
            <p>X</p>
            </a>
            <a
              href="https://www.linkedin.com/in/omrtyyb/"
              className="contact__content-form-item"
              target="blank"
            >
          <div className="contact__content-form-item-media"
           >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5.719C4 4.7695 4.789 4 5.7625 4H26.2375C27.211 4 28 4.7695 28 5.719V26.281C28 27.2305 27.211 28 26.2375 28H5.7625C4.789 28 4 27.2305 4 26.281V5.719ZM11.4145 24.091V13.2535H7.813V24.091H11.4145ZM9.6145 11.773C10.87 11.773 11.6515 10.942 11.6515 9.901C11.629 8.8375 10.8715 8.029 9.6385 8.029C8.4055 8.029 7.6 8.839 7.6 9.901C7.6 10.942 8.3815 11.773 9.5905 11.773H9.6145ZM16.9765 24.091V18.0385C16.9765 17.7145 17.0005 17.3905 17.0965 17.1595C17.356 16.513 17.9485 15.8425 18.9445 15.8425C20.248 15.8425 20.7685 16.8355 20.7685 18.2935V24.091H24.37V17.875C24.37 14.545 22.594 12.997 20.224 12.997C18.313 12.997 17.4565 14.047 16.9765 14.7865V14.824H16.9525C16.9605 14.8115 16.9685 14.799 16.9765 14.7865V13.2535H13.3765C13.4215 14.2705 13.3765 24.091 13.3765 24.091H16.9765Z"
                  // fill="#ABB2BF"
                />
              </svg>{" "}
          </div>
            <p>Linkedin</p>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
