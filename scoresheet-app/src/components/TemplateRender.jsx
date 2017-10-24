// this is what creates the table for the scoresheet
// to be exported to the view template page, and
// the gameplay page

import React, { Component } from "react";
import AddRelationship from "./AddRelationship.jsx";
import SetupScoresheetStructure from "./SetupScoresheetStructure.jsx";

export default function TemplateRender(props) {
  return (
    <div>
      <h3>Name your template:</h3>
      <input
        placeholder="Enter template name"
        onKeyUp={e => {
          props.renameTemplate(e.target.value);
        }}
      />
      <button>Add</button> <br />
      <SetupScoresheetStructure addColumn={props.addColumn} />
      <br />
      <button>Submit Structure</button>
      <AddRelationship />
      <br />
      <button>Submit Relationships</button>
    </div>
  );
}
