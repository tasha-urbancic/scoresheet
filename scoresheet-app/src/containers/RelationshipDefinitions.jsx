
import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../redux/actions/create-templates";
import AddRelationship from "../components/AddRelationship.jsx";

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = {

};

function ScoresheetStructure(props) {

  return (
    <AddRelationship
      {...props}
    />
  )

}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresheetStructure);
