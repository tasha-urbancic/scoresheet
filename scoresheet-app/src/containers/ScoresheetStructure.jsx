
import React, { Component } from "react";
import { connect } from "react-redux";
import {updateCurrentColumn, addColumn} from "../redux/actions/create-templates";
import SetupScoresheetStructure from "../components/SetupScoresheetStructure.jsx";

const mapStateToProps = state => {
  return {
    templateCurrentColumn: state.createTemplates.templateCurrentColumn,
    templateColumns: state.createTemplates.templateColumns
  };
};

const mapDispatchToProps = {
  updateCurrentColumn,
  addColumn
};

function ScoresheetStructure(props) {

  return (
    <SetupScoresheetStructure
      {...props}
    />
  )

}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresheetStructure);
