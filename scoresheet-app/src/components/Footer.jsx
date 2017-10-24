import React from "react";
import FilterLink from "../containers/FilterLink.jsx";

const Footer = () => (
  <p>
    Show: <FilterLink filter="/">HomePage</FilterLink>
    {", "}
    <FilterLink filter="createtemplate">Create Template</FilterLink>
    {", "}
    <FilterLink filter="game/id">Play Game</FilterLink>
  </p>
);
export default Footer;
