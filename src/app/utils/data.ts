import paid from "/public/assets/paid.png";
import optim from "/public/assets/optim.png";
import market from "/public/assets/market.png";
import { IFooterData, INavItems, IServices } from "./type";

export const navItems: INavItems[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About us",
    path: "/about",
  },
  {
    title: " Our Services",
    path: "/services",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const footerData: IFooterData[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About us",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },

  {
    title: "Getting started",
    path: "/",
  },
  {
    title: "Help center",
    path: "/",
  },
  {
    title: "Server status",
    path: "/",
  },
  {
    title: "Report a bug",
    path: "/",
  },
  {
    title: "Chat support",
    path: "/",
  },
];

export const services: IServices[] = [
  {
    pic: paid,
    title: "Paid Media",
    description:
      "Increasing conversions, repeat traffic, and online authority across your website is our top priority.",
  },
  {
    pic: optim,
    title: "Website Optimization",
    description:
      "In order for your funnel to be successful, you need to make it as smooth as possible.",
  },
  {
    pic: market,
    title: "Digital Marketing",
    description:
      "  Leads are nurtured through our email, SMS, and automation services, resulting in customer acquisition and retention.",
  },
];
