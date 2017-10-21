import React, { Component } from 'react';

import { connect } from 'react-redux';

import { changePage } from '../redux/actions/pages';

import HomePage from '../components/HomePage.jsx';
// import TemplateList from '../components/TemplateList.jsx';

const mapStateToProps = state => {
  return {
    page: state.page
  };
};

const mapDispatchToProps = {
  changePage
};

function Content(props) {
  return (
    <div>
      {props.page}
      <HomePage onButtonClick={props.changePage} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
