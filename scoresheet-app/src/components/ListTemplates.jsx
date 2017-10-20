import React from 'react';

export default function ListTemplates(props) {
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
