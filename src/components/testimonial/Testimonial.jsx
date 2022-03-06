import React from "react";

function Testimonial() {
  return (
    <div id="statement-of-faith">
      <div className="container">
        <div className="section-title text-center">
          <h2>Statement of Faith</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                {/* <img src={img1} alt="" />{" "} */}
              </div>
              <div className="testimonial-content">
                <p>
                  "We believe... that there is one God, eternally existent in
                  three persons: God the Father, God the Son, and God the Holy
                  Spirit."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                {/* <img src={img2} alt="" />{" "} */}
              </div>
              <div className="testimonial-content">
                <p>
                  "We believe... in the deity of our Lord Jesus Christ, in His
                  virgin birth, and in His bodily resurrection."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                {/* <img src={img3} alt="" />{" "} */}
              </div>
              <div className="testimonial-content">
                <p>
                  "We believe... the Bible to be the inspired and infallible
                  Word of God. We believe... in the return of the Lord Jesus
                  Christ and the resurrection of the saved and the lost; the
                  saved unto eternal life, living eternally in the presence of
                  God, and the unsaved unto eternal damnation."
                </p>
              </div>
            </div>
          </div>
          <div className="row"> </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                {/* <img src={img4} alt="" />{" "} */}
              </div>
              <div className="testimonial-content">
                <p>
                  "We believe... in salvation by grace through faith in the Lord
                  Jesus Christ."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                {/* <img src={img5} alt="" />{" "} */}
              </div>
              <div className="testimonial-content">
                <p>
                  "We believe... in the baptism of the Holy Spirit with the
                  evidence of speaking in other tongues as a subsequent gift to
                  salvation."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {/* <img src={img6} alt="" />{" "} */}
              </div>
              <div className="testimonial-content">
                <p>
                  "We believe... in the provision of bodily healing in the
                  atoning work of Jesus our Saviour."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
