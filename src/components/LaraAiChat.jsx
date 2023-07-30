import Send from "../Send.svg";

function LaraAiChat() {
  return (
    <div>
      LaraAiChat
      <div className="Lara_Ai">
        <div className="pendulum-container">
          <div className="pendulum-image">
            {/* <img src={image} alt="" /> */}
            <div />
          </div>
        </div>
        <div className="load">
          <div className="loader">
            <span></span>
            <span></span>
            <div className="logo">
              <img className="logo-img" src={Send} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaraAiChat;
