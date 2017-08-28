import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './sport.css';

class Sport extends Component {
	render() {
		return (
			<div className="sport">
				<div className="sportmain">
					<h4><Link to="/sport">SPORT</Link></h4>
					<div className="sportcontent">
						<div className="sportone">
							<Link to="/sport"><img src={require('./img/sport1.jpg')} alt="fotosport" /> </Link>
						</div>
						<div className="sporttwo">
							<ul>
								<li><Link to="/sport"><img src={require('./img/topnews2.jpg')} alt="fototopnews" /> 
									<h5>Photographer captures</h5>
									<p>images of uncontacted Amazon trible</p></Link>
								</li>
								<li> <Link to="/sport">
										<h5>Prince Charles:</h5>
										<p>rising intolerance risks repeat of horrors of past</p>
									</Link>
								</li>
								<li>
									<Link to="/sport">
										<h5>Two 'deadliest' police</h5>
										<p>departments in US to be investigated in California</p>
									</Link>
								</li>
								<li>
									<Link to="/sport">
										<h5>Sighting of uncontacted</h5>
										<p>Amazonian trible - in pictures</p>
									</Link>
								</li>
							</ul>	
						</div>
						<div className="sportthree">
							<Link to="/sport"><img src={require('./img/sport2.jpg')} alt="fotosport" /></Link>
						</div>
						<div className="sportfour">
							<h4><Link to="/sport">POPULAR</Link></h4>
							<div className="sportfoour1">
								<Link to="/sport"><p><img src={require('./img/sport3.jpg')} alt="fotosport" />
								Prince Charles: rising intolerance risks repeat of horrors of past</p></Link>
							</div>
							<div className="sportfoour2">
								<Link to="/sport"><p><img src={require('./img/sport4.jpg')} alt="fotosport" />
								Prince Charles: rising intolerance risks repeat of horrors of past</p></Link>
							</div>
							<div className="sportfoour3">
								<Link to="/sport"><p><img src={require('./img/sport5.jpg')} alt="fotosport" />
								Prince Charles: rising intolerance risks repeat of horrors of past</p></Link>
							</div>
							<div className="sportfoour4">
								<Link to="/sport"><p><img src={require('./img/sport3.jpg')} alt="fotosport" />
								Prince Charles: rising intolerance risks repeat of horrors of past</p></Link>
							</div>
							<div className="sportfoour5">
								<Link to="/sport"><p><img src={require('./img/sport4.jpg')} alt="fotosport" />
								Prince Charles: rising intolerance risks repeat of horrors of past</p></Link>
							</div>
						</div>
					</div>
				</div>	
			</div>
		);
	}
}
export default Sport;