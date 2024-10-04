import About from "./components/homepageComponents/About";
import Banner from "./components/homepageComponents/Banner";
import Counting from "./components/homepageComponents/Counting";
import Service from "./components/homepageComponents/Service";

export default function Home() {
  return (
    <div>
      <Banner />
      <Service />
      <About />
      <Counting />
    </div>
  );
}
