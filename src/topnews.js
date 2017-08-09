import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './topnews.css';

class Topnews extends Component {
	render() {
		return (
			<div className="topnews">
				<div className="topnewsmain">
					<h4><Link to="/topnews">TOP NEWS</Link></h4>
					<div className="topnewscontent">
						<div className="topnewsmainfoto">
							<Link to="/topnews"><img src={require('./img/topnews1.jpg')} alt="fototopnews" /> </Link>
						</div>
						<div className="topnewsother">
							<ul>
								<li><Link to="/topnews"><img src={require('./img/topnews2.jpg')} alt="fototopnews" /> </Link></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>
						<div className="topnewsotherfoto">
							<Link to="/topnews"><img src={require('./img/topnew3.jpg')} alt="fototopnews" /> </Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Topnews;