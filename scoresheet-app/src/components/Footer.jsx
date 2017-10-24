import React from "react";
import FilterLink from "../containers/FilterLink.jsx";

console.log("This is coming from Footer.jsx");

const Footer = () => (
  <p>
    Show: <FilterLink filter="/">HomePage</FilterLink>
    {", "}
    <FilterLink filter="createtemplate">Create Template</FilterLink>
    {", "}
    <FilterLink filter="game/id">Play Game</FilterLink>
  </p>
);

console.log("We reached the bottom!");
export default Footer;
