import React from "react";
import YoutubeEmbed from "./../youtubeEmbed/YoutubeEmbed";

function Services() {
  return (
    <div id="meeting-days" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Meeting Days</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <i className="fa fa-comments-o"></i>
            <h3>Tuesday Teaching Service</h3>
            <p>
              Join us this and every Tuesday Evening for a life transforming
              Service from 6.30pm-8.00pm. Come with an expectation to receive
              from the Lord.
            </p>
          </div>
          <div className="col-xs-12 col-md-4">
            <i className="fa fa-heartbeat"></i>
            <h3>Friday Prayer Service</h3>
            <p>
              Then we meet again on Friday evenings for our Prayer Service from
              6.30pm
            </p>
          </div>
          <div className="col-xs-12 col-md-4">
            <i className="fa fa-group"></i>
            <h3>Sunday Worship Service</h3>
            <p>
              We meet on Sunday morning for our Worship Service. Our Sunday
              Worship Service begins at 9:00am.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <YoutubeEmbed embedId={`9_79Txp3S1s`} />
      </div>
    </div>
  );
}
// https://youtu.be/9_79Txp3S1s
export default Services;
