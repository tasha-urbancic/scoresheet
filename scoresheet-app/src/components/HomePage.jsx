import React from "react";
import { Link } from "react-router-dom";
import TemplateList from "../containers/TemplateList.jsx";
import NavBar from "../components/NavBar.jsx";

export default function HomePage(props) {
  return (
    <div>
      <NavBar />
      <div id="template-list">
        {/* <p className="text-center">Making board games fun again!</p> */}
        <TemplateList />
      </div>
    </div>
  );
}
