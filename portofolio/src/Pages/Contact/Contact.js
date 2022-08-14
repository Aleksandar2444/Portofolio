import "./Contact.css";
import { IoIosArrowForward, IoIosArrowBack, IoIosPin } from "react-icons/io";
import GoogleMapReact from "google-map-react";

const MyMarker = ({ text }) => <div className="marker">{text}</div>;

const Contact = (props) => {
  const defaultProps = {
    center: {
      lat: 41.2537935,
      lng: 21.83891,
    },
    zoom: 7,
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
            <form className="form">
              <ul>
                <li>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input__field"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input__field"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input__field"
                  />
                </li>
                <li>
                  <textarea
                    className="text__area"
                    placeholder="Message"
                  ></textarea>
                </li>
                <li>
                  <input type="hidden" className="input__field" />
                  <button className="send__message">Send message!</button>
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
