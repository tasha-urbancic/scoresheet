// this is what creates the table for the scoresheet
// to be exported to the view template page, and
// the gameplay page

import React, { Component } from 'react';
import AddRelationship from './AddRelationship.jsx';
import ScoresheetStructure from '../containers/ScoresheetStructure.jsx';


export default function TemplateRender(props) {
  let templateName = '';
  return (
    <div>
      <h3>Name your template:</h3>
      <input placeholder="Enter template name" onKeyDown={e => {
          templateName = e.target.value;
          if (e.keyCode === 13) {  
            props.renameTemplate(templateName)
          }
        }} ></input>
        <button onClick={e => {
          props.renameTemplate(templateName)
        }}>Add</button> <br />

      <ScoresheetStructure />
      <br />
      <button>Submit Structure</button>
      <AddRelationship />
      <br />
      <button>Submit Relationships</button>
    </div>
  );
}
