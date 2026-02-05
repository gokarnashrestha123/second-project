import React from "react";
import section1 from "../../assets/sectionone/section1.png";
import section2 from "../../assets/sectionone/section2.png";
import section3 from "../../assets/sectionone/section3.png";

const PlanSection = () => {
  return (
    <section className="w-full relative">
      <div className="mx-auto relative">
        {/* Overlapping heading */}
        <span
          className="
            font-black absolute z-50
            text-[72px]
            sm:text-[100px]
            md:text-[140px]
            lg:text-[179px]
            left-4 sm:left-10 lg:left-[150px]
            -top-16 sm:-top-24 lg:-top-[120px]
            rotate-[-12deg]
          "
        >
          Plan.
        </span>

        {/* Section container */}
        <div className="px-4 sm:px-10 lg:px-20 py-12 sm:py-20">
          <div
            className="
              bg-[#C7D0FF]
              rounded-[40px] sm:rounded-[60px] lg:rounded-[70px]
               min-h-[600px] lg:h-[780px]
              flex flex-col lg:flex-row
              items-center
              justify-between
              gap-16
              relative
            "
          >
            {/* Left cards */}
            <div className="w-full lg:w-1/2 flex justify-center lg:pl-20 lg:pt-40">
              <div className="relative w-[280px] sm:w-[360px] lg:w-[520px] h-[260px] sm:h-[320px] lg:h-[420px] group">
                <img
                  src={section1}
                  alt="Card 1"
                  className="
                    absolute left-24 sm:left-32 lg:left-40
                    w-[180px] sm:w-[220px] lg:w-[285px]
                    h-auto
                    transition-all duration-500 ease-out
                    group-hover:-translate-y-12 group-hover:-rotate-12
                    z-30
                  "
                />

                <img
                  src={section2}
                  alt="Card 2"
                  className="
                    absolute left-24 sm:left-32 lg:left-40 top-24 sm:top-32
                    w-[200px] sm:w-[250px] lg:w-[300px]
                    h-auto
                    transition-all duration-500 ease-out
                    group-hover:translate-x-6 group-hover:-translate-y-4
                    z-20
                  "
                />

                <img
                  src={section3}
                  alt="Card 3"
                  className="
                    absolute top-16 sm:top-20
                    w-[190px] sm:w-[230px] lg:w-[288px]
                    h-auto
                    transition-all duration-500 ease-out
                    group-hover:translate-x-14 group-hover:rotate-12
                    z-10
                  "
                />
              </div>
            </div>

            {/* Right content */}
            <div
              className="
                w-full lg:w-1/2
                px-6 sm:px-10 lg:px-0
                lg:mr-24
                flex flex-col
                gap-6 sm:gap-8
                text-center lg:text-left
              "
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Prepare sessions that practically run themselves
              </h2>

              <p className="text-base sm:text-lg font-light text-black">
                Structured sessions lead to better outcomes. Set up the perfect
                flow with a time-boxed agenda, pre-loaded tools, and a reusable
                team library.
              </p>

              <button
                className="
                px-6 py-3
                w-fit mx-auto lg:mx-0
                bg-[#C7D0FF]
                border border-black
                rounded-2xl
                text-sm
              "
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
