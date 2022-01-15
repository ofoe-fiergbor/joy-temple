import React from "react";

import image1 from "../../assets/31st/31_1.jpg";
import image2 from "../../assets/31st/31_2.jpg";
import image3 from "../../assets/31st/31_3.jpg";
// import image4 from "../../assets/31st/31_4.jpg";
// import image5 from "../../assets/31st/31_5.jpg";
import image6 from "../../assets/31st/31_6.jpg";
import image7 from "../../assets/31st/31_7.jpg";
import image8 from "../../assets/31st/31_8.jpg";
import image9 from "../../assets/31st/31_9.jpg";
import image10 from "../../assets/31st/31_10.jpg";
import image11 from "../../assets/31st/31_11.jpg";
import image12 from "../../assets/31st/31_12.jpg";
// import image1 from "../../assets/portfolio/image1.jpeg";
// import image2 from "../../assets/portfolio/image2.jpeg";
// import image3 from "../../assets/portfolio/image3.jpeg";
// import image4 from "../../assets/portfolio/image4.jpg";
// import image5 from "../../assets/portfolio/image5.jpg";
// import image6 from "../../assets/portfolio/image6.jpeg";
// import image7 from "../../assets/portfolio/image7.jpeg";
// import image8 from "../../assets/portfolio/image8.jpg";
// import image9 from "../../assets/portfolio/image9.jpg";

function MiniGallery() {
  const images = [
    { lg: image1, sm: image1 },
    { lg: image2, sm: image2 },
    { lg: image3, sm: image3 },
    // { lg: image4, sm: image4 },
    // { lg: image5, sm: image5 },
    { lg: image6, sm: image6 },
    { lg: image7, sm: image7 },
    { lg: image8, sm: image8 },
    { lg: image9, sm: image9 },
    { lg: image10, sm: image10 },
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
