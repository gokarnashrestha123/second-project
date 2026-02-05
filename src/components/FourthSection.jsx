import React from "react";
import PlanSection from "./sections/PlanSection";
import RunSection from "./sections/RunSection";

import RecapSection from "./sections/RecapSection";
import CollaborateSection from "./sections/CollaborateSection";

const FourthSection = () => {
  return (
    <section className="w-full">
      <PlanSection />
      <RunSection />
     
      <RecapSection />
      <CollaborateSection />
    </section>
  );
};

export default FourthSection;
