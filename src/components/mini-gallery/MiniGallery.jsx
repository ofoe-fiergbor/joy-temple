import React from "react";

import c1 from "../../assets/indepence/c1.jpeg";
import c2 from "../../assets/indepence/c2.jpeg";
import c3 from "../../assets/indepence/c3.jpeg";
import c4 from "../../assets/indepence/c4.jpeg";
import c5 from "../../assets/indepence/c5.jpeg";
import c6 from "../../assets/indepence/c6.jpeg";
import c7 from "../../assets/indepence/c7.jpeg";
import c8 from "../../assets/indepence/c8.jpeg";
import c10 from "../../assets/indepence/c10.jpeg";
import c11 from "../../assets/indepence/c11.jpeg";
import c12 from "../../assets/indepence/c12.jpeg";
import c13 from "../../assets/indepence/c13.jpeg";
import c14 from "../../assets/indepence/c14.jpeg";
import c15 from "../../assets/indepence/c15.jpeg";
import c16 from "../../assets/indepence/c16.jpeg";
import image7 from "../../assets/indepence/31_7.jpg";
import image11 from "../../assets/indepence/31_11.jpg";
import image12 from "../../assets/indepence/31_12.jpg";

function MiniGallery() {
  const images = [
    { lg: c8, sm: c8 },
    { lg: c2, sm: c2 },
    { lg: c3, sm: c3 },
    { lg: c4, sm: c4 },
    { lg: c5, sm: c5 },
    { lg: c6, sm: c6 },
    { lg: c7, sm: c7 },
    { lg: c1, sm: c1 },
    { lg: c13, sm: c13 },
    { lg: c10, sm: c10 },
    { lg: c11, sm: c11 },
    { lg: c12, sm: c12 },
    { lg: image7, sm: image7 },
    { lg: c14, sm: c14 },
    { lg: c15, sm: c15 },
    { lg: c16, sm: c16 },
    { lg: image11, sm: image11 },
    { lg: image12, sm: image12 },
  ];

  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="row">
          <div className="gallery-items">
            {images.map((image, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-4">
                <div className="gallery-item">
                  <div className="hover-bg">
                    <a
                      target="__"
                      href={image.lg}
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text"></div>
                      <img
                        src={image.sm}
                        className="img-responsive"
                        alt="ICGC Joy Temple"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniGallery;
