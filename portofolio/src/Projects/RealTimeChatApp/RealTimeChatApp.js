import "./RealTimeChatApp.css";

const RealTimeChatApp = (props) => {
  return (
    <div className="my_card img-13">
      <div className="my_content">
        <p>Real time chat application.</p>
        <p>This application is build with React and Nodejs, using sockets.</p>
        <div className="a__links">
          <a
            href="https://github.com/Aleksandar2444/Real-time-chat-app"
            target="_blank"
            rel="noreferrer"
            className="btn-visit"
          >
            Github Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default RealTimeChatApp;
