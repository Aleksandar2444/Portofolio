import "./Contact.css";
import { IoIosArrowForward, IoIosArrowBack, IoIosPin } from "react-icons/io";
import GoogleMapReact from "google-map-react";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const MyMarker = ({ text }) => <div className="marker">{text}</div>;

const Contact = (props) => {
  const defaultProps = {
    center: {
      lat: 41.2537935,
      lng: 21.83891,
    },
    zoom: 7,
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ni2etjp",
        "my_gmail2444",
        form.current,
        "BuPgZj0y0U4S2Fwy4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="Contact__Page">
      <div className="LeftSide__Container_contact">
        <div className="leftside__details_contact">
          <div className="html__tag">
            <IoIosArrowBack />
            html
            <IoIosArrowForward />
          </div>
          <div className="html__tag_body">
            <IoIosArrowBack />
            body
            <IoIosArrowForward />
          </div>
          <div className="html__tag_h1">
            <IoIosArrowBack />
            h1
            <IoIosArrowForward className="arrow_left" />
          </div>
          <div className="h1__contact">
            <h1>
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
              <span className="M">m</span>
              <span>e</span>
            </h1>
          </div>
          <div className="html__tag_h1">
            <IoIosArrowBack />
            /h1
            <IoIosArrowForward />
          </div>
          <div className="html__tag_p">
            <IoIosArrowBack />
            p
            <IoIosArrowForward />
          </div>
          <div className="p__contact">
            <p>
              I'm interested in any oportunity - especially ambitious projects.
              However, if you have other requset or question, don't hesistate to
              use the form. Or direct contact on my e-mail{" "}
              <span>ackowwokca@gmail.com</span>.
            </p>
          </div>
          <div className="html__tag_p">
            <IoIosArrowBack />
            /p
            <IoIosArrowForward />
          </div>
          <div className="form__tag">
            <IoIosArrowBack />
            form
            <IoIosArrowForward />
          </div>
          <div className="form__container">
            <form ref={form} onSubmit={sendEmail} className="form">
              <ul>
                <li>
                  <input
                    type="text"
                    placeholder="Name"
                    name="from_name"
                    className="input__field"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Email"
                    name="from_email"
                    className="input__field"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    className="input__field"
                  />
                </li>
                <li>
                  <textarea
                    className="text__area"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </li>
                <li>
                  <input type="hidden" className="input__field" />
                  <button type="submit" className="send__message">
                    Send message!
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <div className="form__tag">
            <IoIosArrowBack />
            /form
            <IoIosArrowForward />
          </div>
          <div className="html__tag_body">
            <IoIosArrowBack />
            /body
            <IoIosArrowForward />
          </div>
          <div className="html__tag">
            <IoIosArrowBack />
            /html
            <IoIosArrowForward />
          </div>
        </div>
        <div className="rightside__details_contact">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <MyMarker lat={41.143068} lng={22.496098} text={<IoIosPin />} />
          </GoogleMapReact>
          <div className="info__map">
            Aleksandar Ichev
            <br />
            Macedonia, Gevgelija 1480
            <br />
            ul. Mitko Zafirov 21/2 Gevgelija
            <br />
            <br />
            <span>
              <span>@</span>: ackowwokca@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
