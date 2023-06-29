import Blogs from "../components/Blogs";
import Help from "../components/Help";
import Hero from "../components/Hero";
import MarketPlace from "../components/MarketPlace";

function Home() {
  return (
    <>
      <Hero/>
      <Help />
      <MarketPlace />
      <Blogs />
    </>
  );
}

export default Home;
