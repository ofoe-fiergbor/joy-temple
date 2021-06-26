import React from "react";
import lgImg1 from "../../assets/portfolio/01-large.jpg";
import lgImg2 from "../../assets/portfolio/02-large.jpg";
import lgImg3 from "../../assets/portfolio/03-large.jpg";
import lgImg4 from "../../assets/portfolio/04-large.jpg";
import lgImg5 from "../../assets/portfolio/05-large.jpg";
import lgImg6 from "../../assets/portfolio/06-large.jpg";
import lgImg7 from "../../assets/portfolio/07-large.jpg";
import lgImg8 from "../../assets/portfolio/08-large.jpg";
import lgImg9 from "../../assets/portfolio/09-large.jpg";

import smImg1 from "../../assets/portfolio/01-small.jpg";
import smImg2 from "../../assets/portfolio/02-small.jpg";
import smImg3 from "../../assets/portfolio/03-small.jpg";
import smImg4 from "../../assets/portfolio/04-small.jpg";
import smImg5 from "../../assets/portfolio/05-small.jpg";
import smImg6 from "../../assets/portfolio/06-small.jpg";
import smImg7 from "../../assets/portfolio/07-small.jpg";
import smImg8 from "../../assets/portfolio/08-small.jpg";
import smImg9 from "../../assets/portfolio/09-small.jpg";

function MiniGallery() {

  const images = [
    {lg: lgImg1, sm:smImg1 },
    {lg: lgImg2, sm:smImg2 },
    {lg: lgImg3, sm:smImg3 },
    {lg: lgImg4, sm:smImg4 },
    {lg: lgImg5, sm:smImg5 },
    {lg: lgImg6, sm:smImg6 },
    {lg: lgImg7, sm:smImg7 },
    {lg: lgImg8, sm:smImg8 },
    {lg: lgImg9, sm:smImg9 },
  ]

  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          
        </div>
        <div className="row">
        <div className="gallery-items">
        {
         images.map((image, index)=> (
          <div key={index} className="col-sm-6 col-md-4 col-lg-4">
              <div className="gallery-item">
                <div className="hover-bg">
                  <a
                    href={image.lg}
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                    </div>
                    <img
                      src={image.sm}
                      className="img-responsive"
                      alt="ICGC Joy Temple"
                    />
                  </a>
                </div>
              </div>
            </div>
         ))
        }

          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniGallery;
