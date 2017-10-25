import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { changePage, changeGameID } from '../redux/actions/pages';
import {
  changeTemplateName,
  updateCurrentColumn,
  addColumn
} from '../redux/actions/create-templates';

import TemplateRender from '../components/TemplateRender.jsx';
import HomePage from '../components/HomePage.jsx';
import PlayGamePage from '../containers/PlayGamePage.jsx';

// import TemplateList from '../components/TemplateList.jsx';

const mapStateToProps = state => {
  return {
    page: state.pages.page,
    gameid: state.pages.gameid,
    templateName: state.createTemplates.templateName
  };
};

const mapDispatchToProps = {
  changePage,
  changeGameID,
  changeTemplateName
};

const Content = props => {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
          changePage={props.changePage}
          onKeyDown={props.changeGameID}
        />
        <Route
          path="/template/new"
          component={TemplateRender}
          changePage={props.changePage}
          renameTemplate={props.changeTemplateName}
          templateName={props.templateName}
        />
        <Route path="/game/:id" component={PlayGamePage} />
      </Switch>
    </main>
  );
};

// function Content(props) {
//   // return (
//   //   <div>
//   //     <h1>Hello!</h1>
//   //     <Route path="/" component={() => <h1>This is the homepage</h1>} />
//   //     {/* <Route
//   //       path="/createtemplate"
//   //       component={() => <h1>This is the createtemplate page!</h1>}
//   //     /> */}
//   //     <h3>why is this so broken</h3>
//   //   </div>
//   // );
//   if (props.page === "home") {
//     return (
//       <div>
//         <p>Above route</p>
//         <Route path="/" />
//         <p>Below route</p>
//         {/* {props.page}<br></br>
//         {props.gameid} */}
//         <HomePage
//           changePage={props.changePage}
//           onKeyDown={props.changeGameID}
//         />
//       </div>
//     );
//   } else if (props.page === "newScoresheet") {
//     return (
//       <div>
//         <Route path="/createtemplate" />
//         <TemplateRender
//           changePage={props.changePage}
//           renameTemplate={props.changeTemplateName}
//           templateName={props.templateName}
//         />
//       </div>
//     );
//   } else if (props.page === "game") {
//     return <PlayGamePage />;
//   } else {
//     console.log("returning empty page");
//     return <div>empty page</div>;
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Content);
