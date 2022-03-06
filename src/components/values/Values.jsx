import React from "react";

function Values() {
  return (
    <div id="values" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Values</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p> */}
        </div>
        <div className="row">
          <div className="col-md-4">
            <i className="fa fa-flag-checkered"></i>
            <div className="service-desc">
              <h3>Our Mission Statement</h3>
              <p>
                Our Mission is to Raise Leaders, Shape Vision, and Influence
                Society through Christ
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-bullhorn"></i>
            <div className="service-desc">
              <h3>Our Message (Jeremiah 31:17)</h3>
              <p>
                Salvation from Sin • Acceptance for the Outcast • Strength for
                the Weak • Prosperity for honest labour • Dominion over the
                flesh
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-child"></i>
            <div className="service-desc">
              <h3>Our Philosophy</h3>
              <p>Practical Christianity • Human Dignity • Excellence</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <i className="fa fa-pagelines"></i>
            <div className="service-desc">
              <h3>Vision of ICGC (Acts 2:42)</h3>
              <p>
                To establish the house of God through the development of Model
                New Testament Christians and churches.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-globe"></i>
            <div className="service-desc">
              <h3>Our Logo</h3>
              <p>
                The Globe represents the world and our focus to reach out
                internationally. The four pillars represent the main focus and
                devotion the early church was committed to namely: Doctrine,
                Prayer, Fellowship and Breaking of bread.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-heartbeat"></i>
            <div className="service-desc">
              <h3>Statement of faith</h3>
              <p>
                <b>We believe...</b> that there is one God, eternally existent
                in three persons: God the Father, God the Son, and God the Holy
                Spirit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
