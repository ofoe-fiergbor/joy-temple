import React from "react";
import img1 from "../../assets/team/01.jpg";
import img2 from "../../assets/team/02.jpg";


function Team() {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet Our Leaders</h2>
          <p>
          “But among you it will be different. Whoever wants to be a leader among you must be your servant.” Matthew 20:26
          </p>
        </div>
        <div id="row">
          <div className="col-md-6 col-sm-6 team">
            <div className="thumbnail">
              <img src={img1} alt="..." className="team-img" />
              <div className="caption">
                <h4>Rev. Charlotte Quagraine</h4>
                <p>Senior Pastor</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 team">
            <div className="thumbnail">
              <img src={img2} alt="..." className="team-img" />
              <div className="caption">
                <h4>Rev.Dr. Lokko</h4>
                <p>Assistant Pastor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
