import React from "react";

function Header() {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  The Joy Temple
                </h1>
                <p>
                  The International Central Gospel Church – ICGC – is an
                  Evangelical, Charismatic Christian Church.
                </p>

                {/* <i className="fa fa-play" aria-hidden="true"></i> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
