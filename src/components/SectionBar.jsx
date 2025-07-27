import React, { useRef, useState, useEffect } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function SectionBar({ sections }) {
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const indicatorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 150;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  // Move the green indicator
  useEffect(() => {
    const selectedItem = itemRefs.current[selectedIndex];
    const indicator = indicatorRef.current;

    if (selectedItem && indicator) {
      const { offsetLeft, offsetWidth } = selectedItem;
      indicator.style.left = `${offsetLeft}px`;
      indicator.style.width = `${offsetWidth}px`;
    }
  }, [selectedIndex, sections]);

  return (
    <div className="relative py-4 px-6 bg-white">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full z-10 pr-4"
        aria-label="Scroll Left"
      >
        <IoIosArrowDropleftCircle size={40} color="#9f9f9f" />
      </button>

      {/* Scrollable Section Tabs */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar whitespace-nowrap px-10 relative"
      >
        <div className="flex gap-6 w-max relative">
          {/* Full gray line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300" />

          {/* Green sliding segment */}
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-[2px] bg-green-600 transition-all duration-300"
          />

          {/* Section Items */}
          {sections.map((section, index) => (
            <p
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => handleSelect(index)}
              className={`px-2 pb-3 cursor-pointer font-medium ${
                selectedIndex === index ? "text-green-600" : "text-gray-700"
              }`}
            >
              {section.name}
            </p>
          ))}
        </div>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full z-10"
        aria-label="Scroll Right"
      >
        <IoIosArrowDroprightCircle size={40} color="#9f9f9f" />
      </button>
    </div>
  );
}

export default SectionBar;
