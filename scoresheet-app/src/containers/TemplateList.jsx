import React, { Component } from 'react';

import { connect } from 'react-redux';

// import { changePage, changeGameID } from "../redux/actions/pages";

// const mapStateToProps = state => {
//   return {
//     //
//   };
// };

// const mapDispatchToProps = {
//   //
// };

const templates = ['Settlers of Catan', 'Seven Wonders', 'Unearth'];

export default function TemplateList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Games:</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {templates.map(template => {
          return (
            <tr>
              <td>{template}</td>
              <td>
                <button>Start Game</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
