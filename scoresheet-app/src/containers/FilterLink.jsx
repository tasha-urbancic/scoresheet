import React from "react";
import { NavLink } from "react-router-dom";

console.log("Will FilterLink work?");
console.log("NavLink: " + NavLink);

const FilterLink = ({ filter, children }) => (
  <NavLink to={filter === "/" ? "/" : `/${filter}`}>{children}</NavLink>
);

console.log("From bottom of FilterLink");

export default FilterLink;
