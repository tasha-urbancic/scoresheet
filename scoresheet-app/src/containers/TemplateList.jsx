import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewGame } from '../redux/actions/grab-data';
import { Link, Redirect } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    templates: state.templates,
    gameId: state.gamePage.gameInfo.game.id,
    creatingGame: state.gamePage.creatingGame
    // templateId: state.gamePage
  };
};

const mapDispatchToProps = dispatch => ({
  postNewGame: id => {
    const newGameThunk = postNewGame(id);
    console.log('New Game Thunk', newGameThunk);
    dispatch(newGameThunk);
  }
});
class TemplateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }
  render() {
    const props = this.props;
    if (props.gameId && props.creatingGame)
      return <Redirect to={`games/${props.gameId}`} />;
    return (
      <div className="container" id="template-list-container">
        <form className="" role="search" method="get" id="searchform" action="">
          <div className="form-group">
            <input
              name="s"
              id="s"
              type="text"
              className="search-query form-control"
              autoComplete="off"
              placeholder="Search..."
              onChange={e => {
                this.setState({ searchString: e.target.value });
              }}
            />
          </div>
        </form>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Games: </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {props.templates
              .filter(template => {
                // get string from search bar and apply here
                console.log(template.name);
                if (template.name.includes(this.state.searchString)) {
                  return true;
                }
              })
              .map(template => {
                return (
                  <tr key={template.id}>
                    <td className="col-xs-10">{template.name}</td>
                    <td className="col-xs-2">
                      <button
                        className="btn btn-default"
                        onClick={e => {
                          props.postNewGame(template.id);
                        }}
                      >
                        Start Game
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
// const TemplateList = props => {
//   if (props.gameId && props.creatingGame)
//     return <Redirect to={`games/${props.gameId}`} />;
//   return (
//     <div className="container">
//       <form className="" role="search" method="get" id="searchform" action="">
//         <div className="form-group">
//           <input
//             name="s"
//             id="s"
//             type="text"
//             className="search-query form-control"
//             autoComplete="off"
//             placeholder="Search..."
//             ref="searchbar"
//           />
//         </div>
//       </form>
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>Games: </th>
//             <th />
//           </tr>
//         </thead>
//         <tbody>
//           {props.templates
//             .filter(template => {
//               // get string from search bar and apply here
//               return true;
//             })
//             .map(template => {
//               return (
//                 <tr key={template.id}>
//                   <td className="col-xs-10">{template.name}</td>
//                   <td className="col-xs-2">
//                     <button
//                       className="btn btn-default"
//                       onClick={e => {
//                         props.postNewGame(template.id);
//                       }}
//                     >
//                       Start Game
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
