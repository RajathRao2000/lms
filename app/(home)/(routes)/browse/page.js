"use client";
import React, { useEffect } from "react";
import CategoryFilter from "../_components/CategoryFilter";
import { getCourseList } from "../../../_services/index";
const Browse = () => {
  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = () => {
    getCourseList().then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <CategoryFilter />
    </div>
  );
};

export default Browse;
