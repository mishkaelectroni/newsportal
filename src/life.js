import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './life.css';

class Life extends Component {
	render() {
		return (
			<div className="life">
				<div className="lifemain">
					<h4><Link to="/life">LIFE</Link></h4>
					<div className="lifecontent">
						<div className="lifeone">
							<Link to="/life"><img src={require('./img/life1.jpg')} alt="fotolife1" /> </Link>
								
						</div>
						<div className="lifetwo">
							<div className="lifetwoone">
								<Link to="/life"><p>Prince Charles: rising intolerance risks repeat of horrors of past</p></Link>
							</div>
							<div className="lifetwotwo">
								<Link to="/life"><p>Prince Charles: rising intolerance risks repeat of horrors of past</p></Link>
							</div>
						</div>
						<div className="lifethree">
							<Link to="/life"><img src={require('./img/life2.jpg')} alt="fotolife2" /> </Link>
								
						</div>
						<div className="lifefour">
							<div className="lifefourone">
								<Link to="/life"><p>Prince Charles: rising intolerance risks repeat of horrors of past</p></Link>
							</div>
							<div className="lifefourtwo">
								<Link to="/life"><p>Prince Charles: rising intolerance risks repeat of horrors of past</p></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Life;