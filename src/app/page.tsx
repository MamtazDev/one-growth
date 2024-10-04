import About from "./components/homepageComponents/About";
import Banner from "./components/homepageComponents/Banner";
import Choose from "./components/homepageComponents/Choose";
import Counting from "./components/homepageComponents/Counting";
import Marketing from "./components/homepageComponents/Marketing";
import Service from "./components/homepageComponents/Service";

export default function Home() {
  return (
    <div>
      <Banner />
      <Service />
      <About />
      <Counting />
      <Choose />
      <Marketing />
    </div>
  );
}
