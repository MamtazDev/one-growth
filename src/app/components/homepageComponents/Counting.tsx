"use client";
import React from "react";
import CountUp from "react-countup";

const Counting = () => {
  return (
    <div className="counting-section">
      <div className="container">
        <div className="counting-parent row g-4 text-center">
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">
              <CountUp end={4.8} start={0.1} duration={2.75} />K
            </h2>
            <p className="count-text">Jobs Completed</p>
          </div>
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">
              {" "}
              <CountUp end={15} start={0.1} duration={2.75} />+
            </h2>
            <p className="count-text">Industry Experience</p>
          </div>
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">
              {" "}
              <CountUp end={3.6} start={0.1} duration={2.75} />
              K+
            </h2>
            <p className="count-text">Global Clients</p>
          </div>
          <div className="counting-child col-6 col-lg-3">
            <h2 className="count-head counter">
              {" "}
              <CountUp end={130} start={0.1} duration={2.75} />+
            </h2>
            <p className="count-text">Avards Winned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
