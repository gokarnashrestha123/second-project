import React from "react";
import image1 from "../assets/sectionone/vector.png";
import image2 from "../assets/sectionone/vector1.png";
import image3 from "../assets/sectionone/vector2.png";
import image4 from "../assets/sectionone/vector3.png";
import image5 from "../assets/sectionone/vector4.png";
import image6 from "../assets/sectionone/vector3.png";

const images = [image1, image2, image3, image4, image5, image6];

const ImageRow = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto overflow-hidden flex items-center py-6 sm:py-8 md:py-10">
      <div className="marquee-track flex gap-6 sm:gap-8 md:gap-12">
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Vector ${index + 1}`}
            className="
              h-16 w-24
              sm:h-20 sm:w-32
              md:h-24 md:w-40
              lg:h-28 lg:w-44
              object-contain flex-shrink-0
            "
          />
        ))}
      </div>
    </section>
  );
};

export default ImageRow;
