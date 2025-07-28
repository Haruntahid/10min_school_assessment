import React, { useContext, useRef, useState } from "react";
import { CourseContext } from "../context/CourseContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

function RightSide() {
  const { courseData } = useContext(CourseContext);
  const media = courseData?.media || [];
  const checklist = courseData?.checklist || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Track which videos are playing to allow multiple videos on different slides if needed
  const [playingVideos, setPlayingVideos] = useState({});

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handlePlayVideo = (index) => {
    setPlayingVideos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="space-y-8 bg-white p-2 border rounded-md shadow-sm">
      {/* Swiper Gallery */}
      {media.length > 0 && (
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-[35%] left-3 z-10 transform -translate-y-1/2">
            <button
              className="text-3xl text-white"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
            >
              <IoIosArrowDropleftCircle />
            </button>
          </div>
          <div className="absolute top-[35%] right-3 z-10 transform -translate-y-1/2">
            <button
              className="text-3xl text-white"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>

          {/* Main Swiper */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            spaceBetween={10}
            modules={[Navigation]}
            className="mb-4 rounded overflow-hidden opacity-90"
          >
            {media.map((item, index) => {
              const isVideo = item.resource_type === "video";
              const isPlaying = playingVideos[index];

              return (
                <SwiperSlide key={index}>
                  {isVideo && !isPlaying ? (
                    <div
                      className="relative w-full h-64 rounded cursor-pointer bg-black"
                      onClick={() => handlePlayVideo(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handlePlayVideo(index);
                        }
                      }}
                      aria-label={`Play video: ${item.name}`}
                    >
                      <img
                        src={item.thumbnail_url}
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                      />
                      <FaPlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 text-7xl pointer-events-none" />
                    </div>
                  ) : isVideo ? (
                    <iframe
                      className="w-full h-64 rounded"
                      src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1`}
                      title={item.name}
                      allowFullScreen
                      allow="autoplay"
                    />
                  ) : (
                    <img
                      src={item.resource_value}
                      alt={item.name}
                      className="w-full h-64"
                    />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Thumbnails with horizontal scroll */}
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-2 min-w-max pr-2">
              {media.map((item, index) => {
                const thumbSrc =
                  item.resource_type === "image"
                    ? item.resource_value
                    : item.thumbnail_url;

                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    onClick={() => swiperRef.current?.slideTo(index)}
                    className={`relative w-24 h-20 rounded overflow-hidden cursor-pointer border-2 ${
                      isActive ? "border-green-500" : "border-gray-300"
                    }`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        swiperRef.current?.slideTo(index);
                      }
                    }}
                    aria-label={`Thumbnail ${index + 1}: ${item.name}`}
                  >
                    <img
                      src={thumbSrc}
                      alt={`Thumb ${index}`}
                      className="w-full h-full object-cover"
                    />
                    {item.resource_type === "video" && (
                      <FaPlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl pointer-events-none" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Checklist Section */}
      <div className="px-3 py-2">
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
    </div>
  );
}

export default RightSide;
