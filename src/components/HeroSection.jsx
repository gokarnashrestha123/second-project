import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import google_icon from "../assets/google_icon.svg";
import save from "../assets/save.png";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#FFFD63]">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          scrolled ? "bg-[#FFFD63] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center gap-6 px-4 sm:px-8 lg:px-20 h-16">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-5 w-auto" />
          <div className="flex  justify-between w-full items-center">
            {/* Left Links */}
            <ul className="hidden md:flex gap-8 text-xs font-regular text-[#222222] cursor-pointer">
              <li className="">Features</li>
              <li className="">Use case</li>
              <li className="">Templates</li>
              <li className="">Pricing</li>
              <li className="">Resources</li>
              <li className="">Download</li>
            </ul>

            {/* Right Links + Get Started */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex gap-8 text-xs font-regular text-[#222222] cursor-pointer">
                <li className="">Book Demo</li>
                <li className="">Sign in</li>
              </ul>

              <button className="bg-yellow-200 text-black px-5 py-3.5 rounded-xl text-xs font-medium">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-2xl cursor-pointer">☰</div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-8 items-center justify-center text-center pt-28 sm:pt-32 md:pt-40 lg:pt-46 pb-16 sm:pb-20 px-4 sm:px-8 md:px-16 lg:px-20">
        <h1
          className="font-black text-[#0A0B1E] leading-tight
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Run more engaging sessions.
          <br className="hidden sm:block" />
          Get better outcomes.
        </h1>

        <div className="max-w-[690px] px-2 sm:px-6">
          <p className="font-light text-[#0A0B1E] text-base sm:text-lg">
            Effortlessly plan, run and recap super-engaging workshops,
            trainings, and meetings with Butter’s built-in agenda planner,
            integrated collaboration tools and auto-generated recaps all in one
            place.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="flex items-center justify-center gap-2 bg-[#0A0B1E] text-white px-6 py-3 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.35)]">
            <img src={google_icon} alt="Google Icon" className="h-5 w-5" />
            <span className="text-base font-normal">Sign up with Google</span>
          </button>

          <button className="bg-white px-6 py-3 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.35)]">
            <span className="text-base font-normal">Sign up for free</span>
          </button>
        </div>
      </div>

      {/* Floating Save Button */}
      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black absolute bottom-6 right-6 flex items-center justify-center">
        <img src={save} alt="Save Icon" className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
    </section>
  );
};

export default HeroSection;
