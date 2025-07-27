import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function CourseLaidOut() {
  const { courseData } = useContext(CourseContext);
  const content = courseData?.sections[3];
  console.log(content);

  if (!content) return null;

  return (
    <>
      <p className="text-[26px] font-semibold mb-5">{content?.name}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111827] p-6">
        {content.values.map((el, index) => (
          <div key={index} className="flex gap-4 p-4">
            {/* Icon */}
            {el.icon && (
              <img src={el.icon} alt={el.title} className="w-10 h-10" />
            )}

            {/* Text Content */}
            <div>
              <p className="text-lg mb-3 text-white">{el.title}</p>
              <p className="text-sm text-[#808794]">{el.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CourseLaidOut;
