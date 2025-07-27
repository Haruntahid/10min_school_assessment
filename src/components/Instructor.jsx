import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function Instructor() {
  const { courseData } = useContext(CourseContext);
  return (
    <>
      <p className="text-[26px] font-semibold mb-5">
        {courseData?.sections[2].name}
      </p>
      <div className="border-[1px] border-[#dee4ed] rounded-2xl p-5">
        <div className="flex gap-4">
          <img
            className="rounded-full h-24 w-24"
            src={courseData?.sections[2].values[0].image}
            alt={courseData?.sections[2].values[0].name}
          />
          <div>
            <p className="text-xl cursor-pointer hover:text-green-600 transition-all duration-200">
              {courseData?.sections[2].values[0].name}
            </p>
            <div
              className="text-[14px]"
              dangerouslySetInnerHTML={{
                __html: courseData?.sections[2].values[0].description,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructor;
