
import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../redux/actions/create-templates";
import AddRelationship from "../components/AddRelationship.jsx";
import {updateCurrentColumn, writeRulesIntoTemplate} from "../redux/actions/create-templates";

const mapStateToProps = state => {
  return {
    templateColumns: state.createTemplates.templateColumns,
    templateRules: state.createTemplates.templateRules
  };
};

const mapDispatchToProps = {
  updateCurrentColumn,
  writeRulesIntoTemplate
};

function ScoresheetStructure(props) {

  return (
    <AddRelationship
      {...props}
    />
  )

}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresheetStructure);
