import React from "react";
import image1 from "../../assets/sectiontwo/first.png";
import image2 from "../../assets/sectiontwo/second.png";
import image3 from "../../assets/sectiontwo/third.png";
import main from "../../assets/sectionthird/main.png";
import first from "../../assets/sectionthird/first.png";
import second from "../../assets/sectionthird/second.png";
import third from "../../assets/sectionthird/third.png";
import fourth from "../../assets/sectionthird/fouth.png";

const RunSection = () => {
  return (
    <section className="w-full relative py-20">
      {/* ---- First Run Section: Text Left / Images Right ---- */}
      <div className="px-4 sm:px-10 lg:px-20 relative">
        {/* Rotated heading */}
        <span
          className="
            font-black absolute z-50
            text-[72px] sm:text-[100px] md:text-[140px] lg:text-[179px]
            right-4 sm:right-10 lg:right-[150px]
            -top-16 sm:-top-24 lg:-top-[100px]
            rotate-[12deg]
          "
        >
          Run.
        </span>

        <div className="bg-[#BFF9EA] rounded-t-[40px] sm:rounded-t-[60px] lg:rounded-t-[80px] min-h-[600px] lg:h-[700px] flex items-center">
          <div className="w-full px-4 sm:px-10 lg:px-20 pt-20 sm:pt-32 lg:pt-40 flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
            {/* Left Text */}
            <div className="max-w-[520px] flex flex-col gap-6 sm:gap-8 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Prepare sessions that practically run themselves
              </h2>
              <p className="text-base sm:text-lg font-light">
                Structured sessions lead to better outcomes. Set up the perfect
                flow with a time-boxed agenda, pre-loaded tools, and a reusable
                team library.
              </p>
              <button className="px-6 py-3 w-fit mx-auto lg:mx-0 bg-[#BFF9EA] border border-black rounded-2xl text-sm">
                Learn more
              </button>
            </div>

            {/* Right Images */}
            <div className="relative w-full max-w-[484px] h-[250px] sm:h-[380px] lg:h-[451px] mx-auto lg:mx-0">
              <img
                src={image1}
                className="w-[280px] sm:w-[360px] lg:w-[433px] h-auto object-cover rounded-2xl"
                alt="Main"
              />
              <img
                src={image2}
                className="absolute top-[150px] sm:top-[260px] lg:top-[320px] left-[80px] sm:left-[110px] lg:left-[130px] w-[70px] sm:w-[90px] lg:w-[100px] h-auto object-cover rounded-2xl"
                alt="Small"
              />
              <img
                src={image3}
                className="absolute top-[100px] sm:top-[200px] lg:top-[240px] left-[150px] sm:left-[190px] lg:left-[230px] w-[160px] sm:w-[200px] lg:w-[231px] h-auto object-cover"
                alt="Wide"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---- Second Run Section: Image Left / Text Right ---- */}
      <div className="w-full px-4 sm:px-10 lg:px-20  pb-20">
        <div className="bg-[#BFF9EA] rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] min-h-[600px] lg:h-[700px] flex items-center">
          <div className="w-full px-4 sm:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
            {/* Left Images */}
            <div className="relative w-full max-w-[520px] h-[250px] sm:h-[320px] lg:h-[320px] mx-auto lg:mx-0">
              <img
                src={main}
                className="w-[280px] sm:w-[360px] lg:w-[422px] h-auto object-cover"
                alt="Main"
              />
              <img
                src={first}
                className="absolute top-[60px] sm:top-[80px] left-[40px] sm:left-[50px] w-13 sm:w-22 lg:w-30 h-auto object-cover"
                alt="First"
              />
              <img
                src={second}
                className="absolute top-[180px] sm:top-[230px] left-[60px] sm:left-[80px] w-13 sm:w-22 lg:w-30 h-auto object-cover"
                alt="Second"
              />
              <img
                src={third}
                className="absolute top-[100px] sm:top-[120px] left-[150px] sm:left-[200px] w-13 sm:w-22 lg:w-30 h-auto object-cover"
                alt="Third"
              />
              <img
                src={fourth}
                className="absolute top-[-20px] sm:top-[-30px] left-[150px] sm:left-[200px] w-13 sm:w-22 lg:w-30 h-auto object-cover"
                alt="Fourth"
              />
            </div>

            {/* Right Text */}
            <div className="max-w-[520px] flex flex-col gap-6 sm:gap-8 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Keep your team in perfect flow
              </h2>
              <p className="text-base sm:text-lg font-light">
                Stay aligned from start to finish. Visual timelines, shared
                notes, and real-time collaboration tools help your team move
                faster and smarter.
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

export default RunSection;
