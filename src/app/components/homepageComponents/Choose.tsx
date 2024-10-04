import React from "react";
import choose from "/public/assets/choose-img.png";
import tick from "/public/assets/tick.png";
import Image from "next/image";
import Link from "next/link";

const Choose = () => {
  return (
    <div className="choose-section">
      <div className="container">
        <div className="choose-area choose-aside">
          <div className="row">
            <div className="col-lg-6">
              <span className="fs-18 about-sub">Why Choose Us</span>
              <h3 className="fs-52-c" style={{ marginTop: "24px" }}>
                Reach Customers & <br className="d-none d-xl-block" />
                Prospects Across The Entire
              </h3>
              <p className="fs-18 about-text">
                Digital marketing refers to the practice of promoting products
                or services using digital technologies, primarily on the
                internet. This can include a range of techniques, such as social
                media marketing, search engine optimization (SEO), email
                marketing, pay-per-click advertising, and content marketing.
              </p>

              <div className="child" style={{ marginTop: "24px" }}>
                <Image className="img-fluid" src={tick} alt="pic" />
                <p className="fs-18-c res-375">
                  Easily Customize Your Follow-up Campaigns
                </p>
              </div>
              <div className="child" style={{ marginTop: "32px" }}>
                <Image className="img-fluid" src={tick} alt="pic" />
                <p className="fs-18-c res-375">
                  Power Your Revenue With Email & Sms Marketing
                </p>
              </div>

              <Link href="/contact" className="btn btn-success dark">
                Contact Us
              </Link>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="choose-img">
                <Image className="img-fluid" src={choose} alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
