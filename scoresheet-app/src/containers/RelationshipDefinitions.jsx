
import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../redux/actions/create-templates";
import AddRelationship from "../components/AddRelationship.jsx";
import {updateCurrentColumn} from "../redux/actions/create-templates";

const mapStateToProps = state => {
  return {
    templateColumns: state.createTemplates.templateColumns
  };
};

const mapDispatchToProps = {
  updateCurrentColumn
};

function ScoresheetStructure(props) {

  return (
    <AddRelationship
      {...props}
    />
  )

}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresheetStructure);
