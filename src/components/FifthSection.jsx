import React from "react";
import member1 from "../assets/member/member1.png";
import member2 from "../assets/member/member2.png";
import member3 from "../assets/member/member3.png";
import member4 from "../assets/member/member4.png";
import member5 from "../assets/member/member5.png";
import member6 from "../assets/member/member6.png";

const FifthSection = () => {
  const data = [
    {
      id: 1,
      Image: member1,
      name: "Gokarna",
      post: "Web Developer",
      description:
        "Butter has completely changed the way I approach online and remote workshop collaboration. Whether I am facilitating ",
      description1:
        "At LEAP., we regularly run both in-person and remote Design Sprints and Design Thinking workshops. ",
      date: "Feb 16, 2022",
    },
    {
      id: 2,
      Image: member2,
      name: "Facilitator A",
      post: "UX Designer",
      description:
        "Running remote workshops used to feel exhausting and chaotic. Since switching to Butter, everything feels intentional and well-paced.",
      description1:
        "What I appreciate most is how easy it is for participants to understand what’s happening next.",
      date: "Mar 08, 2022",
    },
    {
      id: 3,
      Image: member3,
      name: "Facilitator B",
      post: "Product Manager",
      description:
        "Butter has been a true game changer for my product discovery and strategy sessions.",
      description1:
        "Now every session feels purposeful, and participants leave with clear outcomes.",
      date: "Apr 21, 2022",
    },
    {
      id: 4,
      Image: member4,
      name: "Facilitator C",
      post: "Design Lead",
      description:
        "I confidently recommend Butter to anyone who regularly facilitates workshops.",
      description1:
        "Team members are more present, discussions are deeper, and decisions happen faster.",
      date: "May 12, 2022",
    },
    {
      id: 5,
      Image: member5,
      name: "Facilitator D",
      post: "Scrum Master",
      description:
        "Butter strikes the perfect balance between structure and flexibility.",
      description1:
        "Participation has increased and teams stay focused throughout sessions.",
      date: "Jun 03, 2022",
    },
    {
      id: 6,
      Image: member6,
      name: "Facilitator E",
      post: "Startup Founder",
      description:
        "Butter helps us bring energy and clarity to every workshop we run.",
      description1:
        "Meetings now produce outcomes that actually move the business forward.",
      date: "Jul 18, 2022",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 py-16 sm:py-24">
      {/* Section title */}
      <div className="mb-12 sm:mb-16 text-center md:text-left">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Loved by facilitators everywhere
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3  md:gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="
              rounded-[32px]
              p-6 sm:p-8 lg:p-10
              shadow-lg
              border border-black/10
              flex flex-col
              hover:-translate-y-2 hover:shadow-xl
              transition-all duration-300
            "
          >
            {/* Header */}
            <div className="flex gap-4 mb-4 sm:mb-6 items-center">
              <img
                src={item.Image}
                alt={item.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-sm sm:text-lg">
                  {item.name}
                </span>
                <span className="text-xs sm:text-sm text-black/60">
                  {item.post}
                </span>
              </div>
            </div>

            {/* Main content */}
            <p className="text-sm sm:text-base font-light text-black mb-2 sm:mb-4">
              “{item.description}”
            </p>

            <p className="text-xs sm:text-sm text-black/70 mb-2 sm:mb-4">
              {item.description1}
            </p>

            {/* Footer */}
            <div className="mt-auto">
              <span className="text-[10px] sm:text-xs text-black/40">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12 sm:mt-16">
        <button className="px-4 sm:px-6 py-3 sm:py-5 border border-black rounded-2xl text-sm sm:text-base text-center">
          Read more Butter love
        </button>
      </div>
    </div>
  );
};

export default FifthSection;
