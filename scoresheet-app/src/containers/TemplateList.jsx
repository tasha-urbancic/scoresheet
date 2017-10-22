// logic for creating a list of all templates goes here

// this could be a plain js file that queries for templates

import React, { Component } from "react";

import { connect } from "react-redux";

// import HomePage from "../components/HomePage.jsx";

// import { changePage, changeGameID } from "../redux/actions/pages";

  // const templates = props.templates.map(template => {
  //   return (
  //     <li>
  //       {template.name}
  //       <button onClick={e => props.onDelete(template.id)}>Delete</button>
  //     </li>
  //   );
  // });

  // return <ul>{templates}</ul>;

const mapStateToProps = state => {
  return {
    //
  }
}

const mapDispatchToProps = {
  //
}

function TemplateList(props) {
  <table>
    <thead>
      <tr>
        <th>Games:</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Settlers of Catan</td>
        <td>
          <button>Start Game</button>
        </td>
      </tr>
      <tr>
        <td>Seven Wonders</td>
        <td>
          <button>Start Game</button>
        </td>
      </tr>
      <tr>
        <td>Unearth</td>
        <td>
          <button>Start Game</button>
        </td>
      </tr>
    </tbody>
  </table>;
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
