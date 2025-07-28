import React from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Banner from "../components/Banner";

function Home() {
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

          <div className="col-span-12 md:col-span-4 lg:col-span-4">
            <div className="relative -top-[7%]">
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
