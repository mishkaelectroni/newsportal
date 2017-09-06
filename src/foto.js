import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './foto.css';

class Foto extends Component {
	render() {
		return (
			<div className="foto">
				<div className="fotomain">
					<h4><Link to="/foto">FOTO OF THE DAY</Link></h4>
					<div className="fotocontent">
						<ul>
							<li>
								<Link to="/foto"><img src={require('./img/foto1.jpg')} alt="fotofoto1" /> </Link>
							</li>
							<li>
								<h3>Your most underwhelming Christmas photos</h3>
								<p>From Santa in Greggs to a Croydon of CHristmas past, our From Santa in Greggs to a Croydon of CHristmas past, our</p>
								<p>It's almost here</p>
								<p>From Santa in Greggs to a Croydon of CHristmas past, our From Santa in Greggs to a Croydon of CHristmas past, our</p>

								<button>VIEW ALL FOTO'S &gt;</button>
							</li>						
						</ul>						
					</div>
				</div>
			</div>
		);
	}
}
export default Foto;