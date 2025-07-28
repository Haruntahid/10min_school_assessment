import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function Course() {
  const { courseData } = useContext(CourseContext);
  const checklist = courseData?.checklist || [];

  return (
    <>
      <div className="px-3 py-2 border rounded-md shadow-sm">
        <p className="text-3xl font-semibold mb-3">৳1000</p>
        <button className="w-full border-b-4 border-green-700 py-1 rounded-lg text-white text-[18px] bg-[#1CAB55]">
          Enroll
        </button>
        <p className="text-xl mb-4 font-medium mt-5">এই কোর্সে যা থাকছে</p>
        {checklist.length > 0 && (
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <img src={item.icon} alt="icon" className="w-6 h-6" />
                <span className="text-sm text-gray-800">{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Course;
