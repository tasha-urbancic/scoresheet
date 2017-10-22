import React, { Component } from 'react';

export default function SetupScoresheetStructure(props) {
  return (
    <div>

      <h2>1.) Add column:</h2>

      <h3>Add some columns:</h3>
      <input placeholder="Enter column name..." />
      <button>Add</button><br />
      {/* <input placeholder="Enter column name..." /><br />
      <button>Add</button><br /> */}

      <h3>Add notes:</h3>
      <textarea placeholder="Add notes here..."></textarea>

      <button>Submit Structure</button>

    </div>
  );
}