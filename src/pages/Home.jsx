
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ListUser from "../components/ListUser.jsx";
import ListJob from "../components/ListJob.jsx";
import Header from '../components/Header.jsx';


class Home extends Component {

	render() {
		return (
			<div>
				<Header />
				<Link to="/about/">About</Link>
				<ListUser />
			</div>
		);
	}
}

export default Home;
