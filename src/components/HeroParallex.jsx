import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import ParallaxImage from "./ParallaxImage";
import ImageRow from "./ImageRow";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./fifthSection";
import SixSection from "./SixSection";
import SevenSection from "./SevenSection";
import Footer from "./Footer";



const HeroParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <HeroSection />
      <ParallaxImage scrollY={scrollY} />
      <ImageRow />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixSection />
      <SevenSection />
     
      <Footer />
    </>
  );
};

export default HeroParallax;
