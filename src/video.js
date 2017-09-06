import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './video.css';

class Video extends Component {
	render() {
		return (
			<div className="video">
				<div className="videomain">
					<h4><Link to="/people">VIDEO</Link></h4>
					<div className="videocontent">
						<ul >
							<li>
								<Link to="/video"><img src={require('./img/video1.png')} alt="fotovideo1" /> </Link>
								<p>Qui dolorem eum fugiat, quo voluptas nulaa pariatur</p>
							</li>
							<li>
								<Link to="/video"><img src={require('./img/video2.png')} alt="fotovideo2" /> </Link>
								<p>Qui dolorem eum fugiat, quo voluptas nulaa pariatur</p>
							</li>
							<li>
								<Link to="/video"><img src={require('./img/video3.png')} alt="fotovideo3" /> </Link>
								<p>Qui dolorem eum fugiat, quo voluptas nulaa pariatur</p>
							</li>
							<li>
								<Link to="/video"><img src={require('./img/video4.png')} alt="fotovideo4" /> </Link>
								<p>Qui dolorem eum fugiat, quo voluptas nulaa pariatur</p>
							</li>
						</ul>

						<ul>
							<li>
								<Link to="/video"><img src={require('./img/video1.png')} alt="fotovideo1" /> </Link>
								<p>Qui dolorem eum fugiat, quo voluptas nulaa pariatur</p>
							</li>
							<li>
								<Link to="/video"><img src={require('./img/video2.png')} alt="fotovideo2" /> </Link>
								<p>Qui dolorem eum fugiat, quo voluptas nulaa pariatur</p>
							</li>
							<li>
								<Link to="/video"><img src={require('./img/video3.png')} alt="fotovideo3" /> </Link>
								<p>Qui dolorem eum fugiat, quo voluptas nulaa pariatur</p>
							</li>
							<li>
								<Link to="/video"><img src={require('./img/video4.png')} alt="fotovideo4" /> </Link>
								<p>Qui dolorem eum fugiat, quo voluptas nulaa pariatur</p>
							</li>
						</ul>
						
					</div>
				</div>
			</div>
		);
	}
}
export default Video;