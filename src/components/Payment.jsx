import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function Payment() {
  const { courseData } = useContext(CourseContext);
  console.log(courseData?.sections[14]);
  return <div></div>;
}

export default Payment;
