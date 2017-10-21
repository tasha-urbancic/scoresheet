// logic for creating a list of all templates goes here

// this could be a plain js file that queries for templates

import React from "react";

export default function TemplateList(props) {
  const templates = props.templates.map(template => {
    return (
      <li>
        {template.name}
        <button onClick={e => props.onDelete(template.id)}>Delete</button>
      </li>
    );
  });

  return <ul>{templates}</ul>;
}
