import React from "react";
import mainImage from "../../assets/secondfour/mainImage.png";
import firsticon from "../../assets/secondfour/first icon.png";
import secondicon from "../../assets/secondfour/second-icon.png";
import thirdicon from "../../assets/secondfour/third-icon.png";

const CollaborateSection = () => {
  return (
    <section className="w-full relative pt-24">
      <div className="w-full px-4 sm:px-10 lg:px-20 py-12 sm:py-20">
        {/* Rounded container */}
        <div className="w-full bg-[#FFD8AA] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] min-h-[600px] lg:h-[700px] relative flex items-center justify-center">
          {/* Rotated heading */}
          <span
            className="
              font-black absolute z-50
              text-[50px]  md:text-[140px] lg:text-[179px]
               lg:right-[150px]
              -top-16 sm:-top-24 lg:-top-[200px]
              rotate-[12deg]
            "
          >
            Collaborate.
          </span>

          {/* Content */}
          <div className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-12 lg:gap-16 px-4 sm:px-10 lg:px-20 pt-20 sm:pt-32 lg:pt-40">
            {/* Left Images */}
            <div className="relative w-full max-w-[520px] h-[250px] sm:h-[320px] lg:h-[355px] mx-auto lg:mx-0">
              <img
                src={mainImage}
                alt="Main"
                className="w-[250px] sm:w-[300px] lg:w-[355px] h-auto object-cover"
              />
              <img
                src={firsticon}
                alt="First Icon"
                className="absolute top-[-20px] sm:top-[-25px] lg:top-[-30px] left-[40px] sm:left-[45px] lg:left-[50px] w-13 sm:w-22 lg:w-30 h-auto object-cover"
              />
              <img
                src={secondicon}
                alt="Second Icon"
                className="absolute top-[200px] sm:top-[240px] lg:top-[270px] left-[90px] sm:left-[100px] lg:left-[110px] w-13 sm:w-22 lg:w-30 h-auto object-cover"
              />
              <img
                src={thirdicon}
                alt="Third Icon"
                className="absolute top-[90px] sm:top-[100px] lg:top-[120px] left-[240px] sm:left-[270px] lg:left-[295px] w-13 sm:w-22 lg:w-30 h-auto object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="max-w-[520px] flex flex-col gap-6 sm:gap-8 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Prepare sessions that practically run themselves
              </h2>

              <p className="text-base sm:text-lg font-light text-black">
                Structured sessions lead to better outcomes. Set up the perfect
                flow with a time-boxed agenda, pre-loaded tools, and a reusable
                team library.
              </p>

              <button className="px-6 py-3 w-fit mx-auto lg:mx-0 bg-[#BFF9EA] border border-black rounded-2xl text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
