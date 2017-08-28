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
							<ul className="topnewstextlinks">
								<li><Link to="/topnews"><img src={require('./img/topnews2.jpg')} alt="fototopnews" /> </Link>
									<h5>Photographer captures</h5>
									<p>images of uncontacted Amazon trible</p>
								</li>
								<li>
									<Link to="/topnews">
										<h5>Prince Charles:</h5>
										<p>rising intolerance risks repeat of horrors of past</p>
									</Link>
								</li>
								<li>
									<Link to="/topnews">
										<h5>Two 'deadliest' police</h5>
										<p>departments in US to be investigated in California</p>
									</Link>
								</li>
								<li>
									<Link to="/topnews">
										<h5>Sighting of uncontacted</h5>
										<p>Amazonian trible - in pictures</p>
									</Link>
								</li>
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