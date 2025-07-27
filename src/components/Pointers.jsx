import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { MdDone } from "react-icons/md";

function Pointers() {
  const { courseData } = useContext(CourseContext);
  const values = courseData?.sections[5]?.values || [];

  if (!values.length) return null;

  return (
    <>
      <p className="text-[26px] font-semibold my-5">
        {courseData?.sections[5]?.name}
      </p>
      <div className="grid grid-cols-2 gap-5 border-[1px] border-[#dee4ed] p-8 rounded-2xl">
        {values.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <MdDone className="text-blue-600 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pointers;
