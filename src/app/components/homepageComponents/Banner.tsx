import React from "react";
import growth1 from "/public/assets/growth-1.png";
import clients from "/public/assets/clients.png";
import bg from "/public/assets/bg.png";
import bg1 from "/public/assets/BG-1.png";
import bg2 from "/public/assets/bg-img-part-1.png";
import bg3 from "/public/assets/bg-img-part-2.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="hero__section">
      <div className="container">
        <div className="hero__area ">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <Image src={growth1} alt="pic" />
              <h1 className="hero-title">
                Improve your Business
                <span id="bars" className="d-none d-xl-block"></span>
              </h1>
              <h1 className="hero-title-2">
                with our Digital Marketing services
              </h1>

              <p className="hero-text">
                Our goal is to make it as easy as possible for you to walk away
                with the solution that <br className="d-none d-xl-block" />
                suits your needs perfectly. Discover how we can transform your
                online presence.
              </p>

              <div className="btn-group">
                <a href="./contact.html">
                  <button className="btn btn-success dark" type="submit">
                    Get Started
                  </button>
                </a>
                <a href="./service.html">
                  <button className="btn btn-success light">
                    Pricing <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </a>
              </div>

              <p className="client-info">Trusted by our Clients</p>
              <div className="client-img">
                <Image src={clients} alt="pic" />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-left-side position-relative">
                <Image
                  className="img-fluid d-block d-xl-none"
                  src={bg}
                  alt="pic"
                />
                <Image
                  className="img-fluid d-none d-xl-block"
                  src={bg1}
                  alt="pic"
                />
              </div>

              <div className="other-img ">
                <Image
                  className="position-absolute imgOne animatedImg img-fluid d-none d-xl-block"
                  src={bg2}
                  alt="pic"
                />
                <Image
                  className="position-absolute imgTwo animatedImg img-fluid d-none d-xl-block"
                  src={bg2}
                  alt="pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
