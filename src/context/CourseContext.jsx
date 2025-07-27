/* eslint-disable react-refresh/only-export-components */
// src/context/CourseContext.js
import React, { createContext, useEffect, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch course data whenever language changes
  useEffect(() => {
    fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${language}`,
      {
        method: "GET",
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          accept: "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setCourseData(data.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setCourseData(null);
      });
  }, [language]);

  return (
    <CourseContext.Provider
      value={{ courseData, language, setLanguage, error }}
    >
      {children}
    </CourseContext.Provider>
  );
};
