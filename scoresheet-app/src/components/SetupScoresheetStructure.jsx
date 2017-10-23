import React, { Component } from 'react';

export default function SetupScoresheetStructure(props) {
  return (
    <div>

      <h3>1.) Add columns:</h3>

      <h4>Enter column names:</h4>
      <input placeholder="column name" />
      <button>Add</button><br />
      {/* <input placeholder="Enter column name..." /><br />
      <button>Add</button><br /> */}

      <h4>Add notes:</h4>
      <textarea placeholder="Extra rules go here..."></textarea>
      <button>Add</button>
  
    </div>
  );
}