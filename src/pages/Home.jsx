import React, { useEffect, useRef, useState } from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Banner from "../components/Banner";
import Course from "../components/Course";

function Home() {
  const rightSideRef = useRef(null);
  const [showCourse, setShowCourse] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!rightSideRef.current) return;

      const rect = rightSideRef.current.getBoundingClientRect();

      // Show Course only when RightSide is completely out of the viewport (below the top)
      if (rect.bottom < 0) {
        setShowCourse(true);
      } else {
        setShowCourse(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Banner on top */}
      <div className="w-full">
        <Banner />
      </div>

      {/* Content below banner */}
      <div className="relative container mx-auto px-6 mt-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Left side main content */}
          <div className="col-span-12 md:col-span-8 lg:col-span-8">
            <LeftSide />
          </div>

          {/* Right column with RightSide and Course */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4">
            {/* RightSide positioned with offset and tracked via ref */}
            <div ref={rightSideRef} className="relative -top-[7%]">
              <RightSide />
            </div>

            {/* Sticky Course — only shows when RightSide is fully out of view */}
            <div
              className={`sticky top-11 transition-opacity duration-500 ${
                showCourse ? "block" : "hidden"
              }`}
            >
              <Course />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
