import React, { useState } from "react";
import letterb from "../assets/sixthsection/bimage.png";
import letterc from "../assets/sixthsection/cimage.png";
import lettere from "../assets/sixthsection/eimage.png";
import letteri from "../assets/sixthsection/iimage.png";
import letterm from "../assets/sixthsection/mimage.png";
import lettern from "../assets/sixthsection/nimage.png";
import lettero from "../assets/sixthsection/oimage.png";
import letterr from "../assets/sixthsection/rimage.png";
import lettery from "../assets/sixthsection/yimage.png";
import lettert from "../assets/sixthsection/timage.png";
import playbutton from "../assets/sixthsection/playButton.png";

const SixSection = () => {
  const [rotate, setRotate] = useState(false);

  const outerLetters = [
    letterb,
    letterc,
    lettere,
    letteri,
    letterm,
    lettern,
    lettero,
    letterr,
    lettert,
    lettery,
  ];

  const centerMembers = [letterr, lettert, lettery, letterb, letterc, lettere];

  const outerRadius = 42; // %
  const innerRadius = 20; // %
  const center = 50; // %

  return (
    <div className="w-full flex justify-center py-20 relative">
      {/* ROTATING CONTAINER */}
      <div
        className={`
          relative 
          w-full 
          max-w-[800px] 
          aspect-square
          transition-transform 
          duration-700 
          ease-in-out
          ${rotate ? "rotate-[112deg] " : ""}
        `}
      >
        {/* OUTER LETTERS */}
        {outerLetters.map((letter, index) => {
          const angle = (index / outerLetters.length) * 2 * Math.PI;
          const x = center + outerRadius * Math.cos(angle);
          const y = center + outerRadius * Math.sin(angle);

          return (
            <img
              key={index}
              src={letter}
              alt=""
              className="absolute w-16 sm:w-24 md:w-36 rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}

        {/* INNER CIRCLE */}
        <div
          className={`
            absolute inset-0
            transition-transform duration-700
            ${rotate ? "rotate-[-118deg]" : ""}
          `}
        >
          {centerMembers.map((member, index) => {
            const angle = (index / centerMembers.length) * 2 * Math.PI;
            const x = center + innerRadius * Math.cos(angle);
            const y = center + innerRadius * Math.sin(angle);

            return (
              <img
                key={index}
                src={member}
                alt=""
                className="absolute w-10 sm:w-14 md:w-20 rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            );
          })}
        </div>
      </div>
      {/* PLAY BUTTON */}
      <button
        onClick={() => setRotate(!rotate)}
        className="absolute left-1/2  top-[250px]  lg:top-[470px] -translate-x-1/2 -translate-y-1/2"
      >
        <img
          src={playbutton}
          alt="Play"
          className="w-12 sm:w-14 md:w-16 hover:scale-110 transition"
        />
      </button>
    </div>
  );
};

export default SixSection;
