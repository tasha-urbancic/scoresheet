import React, { Component } from 'react';

// export default function SetupScoresheetStructure(this.props) {

export default class SetupScoresheetStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnName: '',
      extraNotes: ''
    };
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="templateName" className="col-sm-12 control-label">
            Add columns:
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="templateName" className="col-sm-3 control-label">
            Enter column names:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="column name"
              value={this.props.templateCurrentColumn}
              onChange={e => {
                this.props.updateCurrentColumn(e.target.value);
              }}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  this.props.addColumn(this.props.templateCurrentColumn);
                  this.props.updateCurrentColumn('');
                }
              }}
            />
          </div>
          <div className="col-sm-4">
            <button
              type="button"
              className="btn btn-default"
              onClick={e => {
                this.props.addColumn(this.props.templateCurrentColumn);
                this.props.updateCurrentColumn('');
              }}
            >
              Add
            </button>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <ul className="col-sm-4">
              {this.props.templateColumns.map(function(columnName, i) {
                return (
                  <li key={i}>
                    {columnName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="templateName" className="col-sm-3 control-label">
            Add notes:
          </label>
          <div className="col-sm-5">
            <textarea
              type="text"
              className="form-control"
              placeholder="Extra rules go here..."
              value={this.state.extraNotes}
              onChange={e => {
                this.setState({ extraNotes: e.target.value });
              }}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  this.props.addNoteToTemplate(this.state.extraNotes);
                  this.setState({ extraNotes: '' });
                }
              }}
            />
          </div>
          <div className="col-sm-4">
            <button
              type="button"
              className="btn btn-default"
              onClick={e => {
                this.props.addNoteToTemplate(this.state.extraNotes);
                this.setState({ extraNotes: '' });
              }}
            >
              Add
            </button>
          </div>
        </div>

        <div className="col-sm-12 ">
          <ul className="col-sm-4 ">
            <li>
              Extra Notes:{this.props.templateNote}
            </li>
          </ul>
        </div>

      </div>
    );
  }
}