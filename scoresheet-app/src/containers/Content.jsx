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

const mapStateToProps = state => {
  return {
    templateName: state.createTemplates.templateName
  };
};

const mapDispatchToProps = {
  changeTemplateName
};
class Content extends Component {
  homePage = () => <HomePage onKeyDown={this.props.changeGameID} />;

  templateRender = () => (
    <TemplateRender
      renameTemplate={this.props.changeTemplateName}
      templateName={this.props.templateName}
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
