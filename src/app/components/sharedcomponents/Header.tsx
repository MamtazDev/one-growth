"use client";
import React from "react";
import logo from "/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/app/utils";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="menubar__section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="logo-img">
              <Link href="./index.html">
                <Image src={logo} alt="logo" />
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mx-auto ">
                {navItems.map((data, index) => (
                  <li key={index} className="nav-item">
                    <Link
                      className={`nav-link ${
                        pathname === data.path && "active"
                      } `}
                      aria-current="page"
                      href={data.path}
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <form className="d-flex">
                <Link href="./contact.html" className="btn btn-success">
                  Get Started
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
