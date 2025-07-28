import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { MdDone } from "react-icons/md";

function ExclusiveFeature() {
  const { courseData } = useContext(CourseContext);
  const content = courseData?.sections[8];

  return (
    <>
      <p className="text-[26px] font-semibold my-5">{content?.name}</p>

      <div className="border border-[#dee4ed] px-6 rounded-2xl divide-y divide-[#dee4ed]">
        {content?.values?.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row justify-between gap-6 py-6 ${
              index === 0 ? "" : "pt-6"
            }`}
          >
            {/* Left Side: Title & Checklist */}
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <ul className="space-y-2">
                {item.checklist?.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <MdDone className="text-blue-600 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              {item.file_type === "image" && (
                <img
                  src={item.file_url}
                  alt={item.title}
                  className="w-52 rounded-md shadow-sm"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ExclusiveFeature;
