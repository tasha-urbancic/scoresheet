import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { changeGameID } from '../redux/actions/pages';
import {
  changeTemplateName,
  updateCurrentColumn,
  addColumn
} from '../redux/actions/create-templates';
import TemplateRender from '../components/TemplateRender.jsx';
import HomePage from '../components/HomePage.jsx';
import PlayGamePage from '../containers/PlayGamePage.jsx';
import { postNewTemplate } from '../redux/actions/grab-data';

const mapStateToProps = state => {
  return {
    templateName: state.createTemplates.templateName,
    newTemplate: state.createTemplates
  };
};

const mapDispatchToProps = dispatch => ({
  postNewTemplate: newTemplate => {
    const newGameThunk = postNewTemplate(newTemplate);
    console.log('New Game Thunk', newGameThunk);
    dispatch(newGameThunk);
  },
  changeTemplateName: name => {
    dispatch(changeTemplateName(name));
  }
});

class Content extends Component {
  homePage = () => <HomePage onKeyDown={this.props.changeGameID} />;

  templateRender = () => (
    <TemplateRender
      renameTemplate={this.props.changeTemplateName}
      templateName={this.props.templateName}
      postNewTemplate={this.props.postNewTemplate}
      newTemplate={this.props.newTemplate}
    />
  );

  render() {
    return (
      <main>
        <Route exact path="/templates" component={this.homePage} />
        <Route path="/templates/new" component={this.templateRender} />
        <Route path="/games/:id" component={PlayGamePage} />
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
