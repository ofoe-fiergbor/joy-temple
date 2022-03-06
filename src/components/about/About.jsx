import React from "react";
import img from "../../assets/about__.jpg";

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <img src={img} className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                This is the Joy Temple of the International Central Gospel
                Church (I.C.G.C.). We are a Bible – believing Charismatic Church
                with a commitment to bringing leadership and vision to our
                generation and influencing our society with the principles of
                the Kingdom of God.
              </p>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    <li>
                      Our Primary commitment (Acts 1:8 ): To prepare the African
                      to be a blessing to the world, Break the spirit of
                      inferiority, Cultivate a spirit of excellence, and Play
                      our role in God’s end-time agenda.
                    </li>
                    <li>
                      Our message ( Romans 1:16 ): Salvation from Sin,
                      Acceptance for outcasts, Strength for the weak, Healing
                      for the Body, Liberty for the mind, Freedom for the
                      Oppressed, Hope for the Future, Prosperity for honest
                      labour, Dominion over the flesh, and Abundance of Life in
                      Christ.{" "}
                    </li>
                    <li>
                      Your Part in the Vision (Psalm 68:11): Commit your life to
                      Christ, Live a Christ-Centered life, Serve with your gifts
                      and talents, Pray for the church and its leaders, and
                      Support the Church Financially.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
