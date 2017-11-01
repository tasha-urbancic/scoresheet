import React, { Component } from 'react';

// export default function SetupScoresheetStructure(this.props) {

export default class SetupScoresheetStructure extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columnName: '',
			extraNotes: '',
			columnFull: true
		};
	}

	render() {
		return (
			<div>
				<div className="form-group">
					<label htmlFor="templateName" className="col-sm-4 control-label">
						Enter column names:
					</label>
					<div className="col-sm-4">
						<input
							type="text"
							className="form-control"
							placeholder="column name"
							value={this.props.templateCurrentColumn}
							onChange={(e) => {
								this.props.updateCurrentColumn(e.target.value);
							}}
							onKeyDown={(e) => {
								let columnNames = this.props.templateColumns;
								let currentColumnName = this.props.templateCurrentColumn;
								let duplicate = 0;
								if (currentColumnName.length !== 0 && e.keyCode === 13) {
									for (let i = 0; i < columnNames.length; i++) {
										if (columnNames[i] == currentColumnName) {
											duplicate++;
											this.setState({ columnFull: false });
										}
									}
									if (duplicate === 0 && e.keyCode === 13) {
										this.props.addColumn(this.props.templateCurrentColumn);
										this.props.updateCurrentColumn('');
										this.setState({ columnFull: true });
									}
								} else if (currentColumnName.length == 0 && e.keyCode === 13) {
									this.setState({ columnFull: false });
								}
							}}
						/>
					</div>
					<div className="col-sm-4">
						<button
							type="button"
							className="btn btn-default"
							onClick={(e) => {
								let columnNames = this.props.templateColumns;
								let currentColumnName = this.props.templateCurrentColumn;
								let duplicate = 0;
								if (currentColumnName.length !== 0) {
									for (let i = 0; i < columnNames.length; i++) {
										if (columnNames[i] == currentColumnName) {
											duplicate++;
											this.setState({ columnFull: false });
										}
									}
									if (duplicate === 0) {
										this.props.addColumn(this.props.templateCurrentColumn);
										this.props.updateCurrentColumn('');
										this.setState({ columnFull: true });
									}
								} else if (currentColumnName.length == 0) {
									this.setState({ columnFull: false });
								}
							}}
						>
							Add
						</button>
					</div>
				</div>

				<div className="form-group">
					<div>
						{this.props.templateColumns.length !== 0 && (
							<ul className="col-md-4 col-md-offset-4">
								{this.props.templateColumns.map(function(columnName, i) {
									return <li>{columnName}</li>;
								})}
							</ul>
						)}
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="templateName" className="col-sm-4 control-label">
						Add notes:
					</label>
					<div className="col-sm-4">
						<textarea
							type="text"
							className="form-control"
							å
							placeholder="Extra rules go here..."
							value={this.state.extraNotes}
							onChange={(e) => {
								this.setState({ extraNotes: e.target.value });
							}}
							onKeyDown={(e) => {
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
							onClick={(e) => {
								this.props.addNoteToTemplate(this.state.extraNotes);
								this.setState({ extraNotes: '' });
							}}
						>
							Add
						</button>
					</div>
				</div>

				<div className="text-center">
					{this.props.templateNote !== '' && (
						<ul className="col-md-4 col-md-offset-4 text-left">Notes: {this.props.templateNote}</ul>
					)}
				</div>

				{!this.state.columnFull && (
					<div>
						<div className="alert alert-danger" aria-hidden="true" role="alert">
							Please enter column names that are unique and not blank.
						</div>
					</div>
				)}
			</div>
		);
	}
}
