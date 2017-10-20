import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addTemplate, deleteTemplate } from '../redux/actions/templates';

import AddTemplate from '../components/AddTemplate.jsx';
import ListTemplates from '../components/ListTemplates.jsx';

const mapStateToProps = state => {
  return {
    templates: state.templates
  };
};

const mapDispatchToProps = {
  addTemplate,
  deleteTemplate
};

function Templates(props) {
  return (
    <div>
      <AddTemplate onAdd={props.addTemplate} />
      <ListTemplates templates={props.templates} onDelete={props.deleteTemplate} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
