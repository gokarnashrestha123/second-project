import React, { useEffect, useState } from "react";
import dashboardImg from "../assets/image.jpeg";

const ParallaxImage = ({ scrollY }) => {
  const [vh, setVh] = useState(window.innerHeight);

 
  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const collapseSpeed = 1.5;

  const clampedScroll = Math.min(scrollY, vh / collapseSpeed);
  const height = Math.max(0, vh - clampedScroll * collapseSpeed);

  return (
    <section
      className="
        w-full  transition-[height] duration-300 ease-out
        px-4 sm:px-8 md:px-16 lg:px-20
      "
      style={{ height }}
    >
      <div
        className="
          flex justify-center bg-[#FFFD6A]
          py-10 sm:py-14 md:py-20
          shadow-[0_8px_48px_0_rgba(10,11,30,0.08),0_4px_8px_0_rgba(10,11,30,0.06)]
        "
        style={{
          transform: `translateY(${clampedScroll * -1.6}px)`,
        }}
      >
        <img
          src={dashboardImg}
          alt="Dashboard"
          className="
            rounded-2xl sm:rounded-3xl shadow-2xl
            w-full   min-h-[70svh] md:min-h-screenmax-w-[320px]
            sm:max-w-[480px]
            md:max-w-[720px]
            lg:max-w-[900px]
            xl:max-w-[1100px]
          "
        />
      </div>
    </section>
  );
};

export default ParallaxImage;
