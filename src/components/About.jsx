import React, { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function About() {
  const { courseData } = useContext(CourseContext);
  const content = courseData?.sections[7];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <p className="text-[26px] font-semibold my-5">{content?.name}</p>

      <div className="border border-[#dee4ed] px-5 rounded-2xl">
        {content?.values?.map((item, index) => (
          <div
            key={item.id}
            className="border-b border-[#dee4ed] py-5 cursor-pointer last:border-b-0"
          >
            {/* Title Bar */}
            <div
              onClick={() => toggleCollapse(index)}
              className="flex justify-between items-center"
            >
              <h3
                className="text-lg font-medium"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <span className="ml-4 text-gray-500">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {/* Collapsible Content */}
            {openIndex === index && (
              <div
                className="mt-3 text-gray-700 pl-2"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
