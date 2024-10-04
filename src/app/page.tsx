import About from "./components/homepageComponents/About";
import Banner from "./components/homepageComponents/Banner";
import Service from "./components/homepageComponents/Service";

export default function Home() {
  return (
    <div>
      <Banner />
      <Service />
      <About />
    </div>
  );
}
