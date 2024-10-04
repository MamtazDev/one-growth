import React from "react";
import logo from "/public/assets/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/app/utils";

const Footer = () => {
  return (
    <footer>
      <div className="footer__section">
        <div className="container">
          <div className="footer__area">
            <div className="footer-parent">
              <div className="footer_logo">
                <Link href="/">
                  <Image src={logo} alt="pic" />
                </Link>
                <p className="fs-18-w footer-logo-text">
                  Lorem ipsum dolor sit amet
                  <br className="d-none d-lg-block" />
                  consectetur adipiscing <br className="d-block d-lg-none" />{" "}
                  elit aliquam
                </p>
                <div className="social-media">
                  <Link
                    href="https://www.facebook.com/Opediatech/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link
                    href="https://www.instagram.com/opedia_technologies/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <a href="https://bd.linkedin.com/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <Link href="https://www.youtube.com/" target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </div>
              </div>

              <div className="footer-menu">
                <p className="company-title">Company</p>
                {footerData.slice(0, 5).map((data, index) => (
                  <Link key={index} href={data.path}>
                    {" "}
                    <span className="fs-18-w">{data.title}</span>{" "}
                  </Link>
                ))}
              </div>

              <div className="footer-menu">
                <p className="company-title">Support</p>
                {footerData.slice(5, 10).map((data, index) => (
                  <Link key={index} href={data.path}>
                    {" "}
                    <span className="fs-18-w">{data.title}</span>{" "}
                  </Link>
                ))}
              </div>
              <div className="footer-menu">
                <p className="company-title">Contacts us</p>
                <div className="contact-child">
                  <i className="fa-regular fa-envelope"></i>
                  <a href="mailto:naharweb15@gmail.com" target="_blank">
                    <span className="fs-18-w">contact@company.com</span>
                  </a>
                </div>
                <div className="contact-child">
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+8801978159172" target="_blank">
                    <span className="fs-18-w">(414) 687 - 5892</span>
                  </a>
                </div>
                <div className="contact-child">
                  <i className="fa-solid fa-location-dot"></i>
                  <a href="https://www.google.com/maps" target="_blank">
                    <span className="fs-18-w">
                      794 Mcallister St <br className="d-none d-lg-block" />
                      San Francisco, 94102
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy__section">
        <div className="container">
          <div className="privacy__area">
            <div className="copyright-title">
              <p>Copyright © 2023 OneGrowth</p>
            </div>
            <div className="privacy-title">
              <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
