import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { FaStar } from "react-icons/fa";
import SectionBar from "./SectionBar";
import Instructor from "./Instructor";
import CourseLaidOut from "./CourseLaidOut";

function LeftSide() {
  const { courseData, language, setLanguage, error } =
    useContext(CourseContext);

  const sections = courseData?.sections?.filter((s) => s.name?.trim()) || [];

  return (
    <div>
      <div className="bg-[#06012a] min-h-64">
        <div className="py-10 text-white container mx-auto md:px-10">
          {/* Language Toggle */}
          <div className="mb-6 flex gap-2">
            <button
              className={`px-4 py-2 rounded ${
                language === "en" ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setLanguage("en")}
            >
              English
            </button>
            <button
              className={`px-4 py-2 rounded ${
                language === "bn" ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setLanguage("bn")}
            >
              বাংলা
            </button>
          </div>

          {/* Main content */}
          {error && <p className="text-red-400">Error: {error}</p>}
          {courseData ? (
            <>
              <p className="text-4xl font-semibold">{courseData.title}</p>
              <div className="flex gap-2 my-2">
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="#ffa500" size={20} />
                  ))}
                </div>
                <p>(81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
              </div>
              <div
                className="text-[#808087] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: courseData.description }}
              />
            </>
          ) : (
            <p>Loading course data...</p>
          )}
        </div>
      </div>

      {/* SectionBar Component */}
      {sections.length > 0 && <SectionBar sections={sections} />}
      <Instructor />
      <CourseLaidOut />
    </div>
  );
}

export default LeftSide;
