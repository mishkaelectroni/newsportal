import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './people.css';

class People extends Component {
	render() {
		return (
			<div className="people">
				<div className="peoplemain">
					<h4><Link to="/people">PEOPLE</Link></h4>
					<div className="peoplecontent">
						<div className="peopleone">
							<Link to="/people"><img src={require('./img/people1.jpg')} alt="fotoepople1" /> </Link>
								<p><Link to="/people">Franca Sozzani</Link>, editor in chief of Vouge Italia, dies aged 66</p>
						</div>
						<div className="peopletwo">
							<Link to="/people"><img src={require('./img/people2.jpg')} alt="fotoepople1" /> </Link>
								<p><Link to="/people">Make Will Smith great again</Link>, Charm, comedy, hit film after hit film</p>
						</div>
						<div className="peoplethree">
							<Link to="/people"><img src={require('./img/people3.jpg')} alt="fotoepople1" /> </Link>
								<p><Link to="/people">Gold,frankincense and Clarkson's Merc:</Link>the Sun's secret nativity play</p>
						</div>
						<div className="peoplefour">
							<Link to="/people"><img src={require('./img/people4.jpg')} alt="fotoepople1" /> </Link>
								<p><Link to="/people">Emma Stone:</Link> directorsgave my improv jokes to male co-stars</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default People;