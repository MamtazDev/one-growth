import { services } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <section className="service-section overflow-hidden">
      <div className="container">
        <div className="service-area">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <p className="fs-52-w res-425">
                Our services solve any business problem
              </p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <p
                style={{ color: "#D0D0D0", paddingBottom: "33px" }}
                className="fs-18"
              >
                Our team has a successful track record of helping brands
                <br className="d-none d-xl-block" />
                scale profitably based on high-performing strategies.
              </p>
              <a href="./service.html">
                <p className="simple">
                  See More <i className="fa-solid fa-chevron-right"></i>
                </p>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- card section --> */}
        <div className="row">
          {services.map((data, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <Link href="/">
                <div
                  className="new_card"
                  //   data-aos="fade-right"
                  //   data-aos-offset="200"
                  //   data-aos-delay="50"
                  //   data-aos-duration="1200"
                  //   data-aos-easing="ease-in-out"
                  //   data-aos-once="false"
                >
                  <div className="new-card-img-top">
                    <Image className="img-fluid" src={data.pic} alt="pic" />
                  </div>
                  <h5 className="card-title">{data.title}</h5>

                  <p className="card-text">{data.description}</p>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
