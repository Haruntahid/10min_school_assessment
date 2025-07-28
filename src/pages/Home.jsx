import React from "react";
import LeftSide from "../components/LeftSide";

function Home() {
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 lg:col-span-8">
            <LeftSide />
          </div>
        </div>
        <div className="col-span-5"></div>
      </div>
    </>
  );
}

export default Home;
