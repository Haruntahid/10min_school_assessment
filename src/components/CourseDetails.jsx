import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { MdDone } from "react-icons/md";

function CourseDetails() {
  const { courseData } = useContext(CourseContext);
  const content = courseData?.sections[13];
  console.log(content);
  return (
    <>
      <div className="border-[1px] border-[#dee4ed] p-8 rounded-2xl">
        <p className="text-[26px] font-semibold my-5">{content?.name}</p>
        <div className="flex items-start gap-2">
          <MdDone className="text-blue-600 mt-1 flex-shrink-0" size={20} />
          <p className="text-gray-800">
            ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)
          </p>
        </div>
        <div className="flex items-start gap-2">
          <MdDone className="text-blue-600 mt-1 flex-shrink-0" size={20} />
          <p className="text-gray-800">স্মার্টফোন অথবা পিসি</p>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
