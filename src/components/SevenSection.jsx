import React from "react";

const SevenSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-28 justify-center items-center px-6 sm:px-10 lg:px-20 pb-28">
        {/* Text */}
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
          <span className="font-bold">
            Built for facilitators, by facilitators.
          </span>{" "}
          We’ve built Butter with love from our community from day one. Level up
          your workshopping, facilitation, and collaboration skills by learning
          from our network of experts.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button className="px-4 sm:px-6 py-3 sm:py-5 border border-black rounded-2xl text-sm sm:text-base text-center">
            Read more Butter love
          </button>
        </div>
      </div>
    </div>
  );
};

export default SevenSection;
