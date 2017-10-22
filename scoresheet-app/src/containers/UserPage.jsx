// user page html goes here

// include navbar component

// include template_list component

import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addTemplate, deleteTemplate } from '../redux/actions/templates';

import AddTemplate from '../components/AddTemplate.jsx';
import TemplateList from '../components/TemplateList.jsx';

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
      <TemplateList templates={props.templates} onDelete={props.deleteTemplate} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
