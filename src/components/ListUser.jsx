
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUser, setUserName } from "./../actions/userActions";
// import {createStore} from 'redux';
@connect((store) => {
	return {
		user: store.user.user,
	};
})

class ListUser extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todo: [],
			title: "user list"
		}
	}

	componentDidMount() {
		this.props.dispatch(fetchUser())
	}

	_onClick(name) {

		this.state.todo.push(name);
		this.props.dispatch(setUserName(this.state.todo))
		console.log(this.state.todo)
	}

	get listUser() {
		let { user } = this.props;
		let listuser = user.map((item, index) => {
			return <li key={index} onClick={this._onClick.bind(this, item)}>{item.name}, {item.year}</li>
		});
		return listuser;
	}

	render() {
		return (
				<div>
				<h2>{this.state.title}</h2>
				<ul>{this.listUser}</ul>
			</div>
		);
	}
}


export default ListUser;
