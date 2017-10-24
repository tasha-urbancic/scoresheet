import React, { Component } from 'react';

import { connect } from 'react-redux';

import { dataFetch } from '../redux/actions/grab-data';

const mapStateToProps = state => {
  return {
    templates: state.templates
  };
};

const mapDispatchToProps = {
  dataFetch
};

// const templates = ['Settlers of Catan', 'Seven Wonders', 'Unearth'];

const TemplateList = props => {
  // props.dataFetch();
  console.log(props.templates);
  return (
    <table>
      <thead>
        <tr>
          <th>Games: </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.templates.map(template => {
          return (
            <tr>
              <td>{template.name}</td>
              <td>
                <button>Start Game</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
