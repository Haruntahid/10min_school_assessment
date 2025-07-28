import React, { useContext, useRef } from "react";
import { CourseContext } from "../context/CourseContext";
import SectionBar from "./SectionBar";
import Instructor from "./Instructor";
import CourseLaidOut from "./CourseLaidOut";
import Pointers from "./Pointers";
import CourseDetails from "./CourseDetails";
import Payment from "./Payment";
import About from "./About";
import FaQ from "./FaQ";
import ExclusiveFeature from "./ExclusiveFeature";
import FreeItem from "./FreeItem";
import Banner from "./Banner";

function LeftSide() {
  const { courseData } = useContext(CourseContext);
  const sections = courseData?.sections?.filter((s) => s.name?.trim()) || [];
  const sectionRefs = useRef({});

  const scrollToSection = (name) => {
    const el = sectionRefs.current[name];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* SectionBar */}
      {sections.length > 0 && (
        <SectionBar sections={sections} onSelectByName={scrollToSection} />
      )}

      {/* Dynamic Section Rendering */}
      <div className="mt-10">
        {sections.map((section) => (
          <div
            key={section.order_idx}
            ref={(el) => (sectionRefs.current[section.name] = el)}
            className="mb-10"
          >
            {section.type === "instructors" ? (
              <Instructor />
            ) : section.type === "features" ? (
              <CourseLaidOut />
            ) : section.type === "pointers" ? (
              <Pointers />
            ) : section.type === "requirements" ? (
              <CourseDetails />
            ) : section.type === "how_to_pay" ? (
              <Payment />
            ) : section.type === "about" ? (
              <About />
            ) : section.type === "faq" ? (
              <FaQ />
            ) : section.type === "feature_explanations" ? (
              <ExclusiveFeature />
            ) : section.type === "free_items" ? (
              <FreeItem />
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSide;
