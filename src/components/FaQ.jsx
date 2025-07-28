import React, { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function FaQ() {
  const { courseData } = useContext(CourseContext);
  const content = courseData?.sections[15];

  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleToggleAll = () => {
    setShowAll((prev) => !prev);
    setOpenIndex(null);
  };

  const visibleFaqs = showAll ? content?.values : content?.values?.slice(0, 5);

  return (
    <>
      <p className="text-[26px] font-semibold my-5">{content?.name}</p>

      <div className="relative border border-[#dee4ed] px-5 rounded-2xl pb-6">
        {visibleFaqs?.map((item, index) => (
          <div
            key={item.id}
            className={`border-b border-[#dee4ed] py-5 cursor-pointer ${
              index === visibleFaqs.length - 1 ? "border-b-0" : ""
            }`}
          >
            {/* Question */}
            <div
              onClick={() => toggleCollapse(index)}
              className="flex justify-between items-center"
            >
              <h3
                className="text-lg font-medium"
                dangerouslySetInnerHTML={{ __html: item.question }}
              />
              <span className="ml-4 text-gray-500">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div
                className="mt-3 text-gray-700 pl-2"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            )}
          </div>
        ))}

        {/* Toggle Button Positioned in Border */}
        {content?.values?.length > 5 && (
          <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 bg-white">
            <button
              onClick={handleToggleAll}
              className="font-medium px-5 py-1 rounded-2xl bg-white shadow text-xs"
            >
              {showAll ? "See Less" : "See All"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FaQ;
