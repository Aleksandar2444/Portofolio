import "./About.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="About__Page">
      <div className="RigthSide__Container_about">
        <div className="rightside__details_about">
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
          <div className="h1__about">
            <h1>
              <span>M</span>
              <span>e</span>
              <span>,</span>
              <span className="M">M</span>
              <span>y</span>
              <span>s</span>
              <span>e</span>
              <span>l</span>
              <span>f</span>
              <span className="and">&</span>
              <span>I</span>
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
          <div className="p__about">
            <p>
              I'm a Full Stack Developer who love to build developing skills in
              IT world. I have a serious passion for UI effects, animations and
              creating intuitive, dynamic user experiences. Also love to build
              and maintain the mechanisms that process data and perform actions
              on websites, involved in data storage, security, and other
              server-side logic that powers websites and apps from behind the
              scenes.
            </p>
            <p>
              Well-organised person, problem solver who like working with
              positive people. Fan of SpaceX, OpenAI, gym, outdoor activities
              and movies.
            </p>
            <p>Interested in the entire frontend and backend spectrum.</p>
            <Link to="/contact" className="navigate_to_contact">
              Together we are stronger.
            </Link>
          </div>
          <div className="html__tag_p">
            <IoIosArrowBack />
            /p
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
        <div className="cube__container">
          <div className="cube">
            <div className="box">
              <div className="number one">
                <div>JavaScript</div>
                <div>Node.js</div>
                <div>React.js</div>
                <div>Angular</div>
              </div>
              <div className="number two">
                <div>Bootstrap</div>
                <div>npm</div>
                <div>JSON</div>
                <div>TypeScript</div>
              </div>
              <div className="number three">
                <div>Github</div>
                <div>Next.js</div>
                <div>BEM</div>
                <div>SQL</div>
              </div>
              <div className="number four">
                <div>MongoDB</div>
                <div>HTML5</div>
                <div>CSS</div>
                <div>Nest.js</div>
              </div>
              <div className="number five">
                <div>Redux</div>
                <div>Mongoose ODM</div>
                <div>Postman API</div>
                <div>jQuery</div>
              </div>
              <div className="number six">
                <div>AJAX</div>
                <div>ES5/ES6</div>
                <div>Firebase</div>
                <div>Express.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
