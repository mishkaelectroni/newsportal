import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './headermenu.css';

class Headermenu extends Component {
	render() {
		return (
			<div className="headermenu">
				<div className="menumain">
					<ul>
						<li><Link to="/">HOME</Link></li>
						<li>|</li>
						<li><Link to="/topnews">WORLD</Link></li>
						<li>|</li>
						<li><Link to="/sport">SPORT</Link></li>
						<li>|</li>
						<li><Link to="/sport">FOOTBALL</Link></li>
						<li>|</li>
						<li><Link to="/people">OPINION</Link></li>
						<li>|</li>
						<li><Link to="/life">CULTURE</Link></li>
						<li>|</li>
						<li><Link to="/people">BUSINESS</Link></li>
						<li>|</li>
						<li><Link to="/life">LIFESTYLE</Link></li>
						<li>|</li>
						<li><Link to="/foto">FASHION</Link></li>
						<li>|</li>
						<li><Link to="/people">ENVIRONMENT</Link></li>
						<li>|</li>
						<li><Link to="/life">TECH</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}
export default Headermenu;