import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './footer.css';
class Footer extends Component {
	render() {
		return (
		<div className="footer">
		            <div className="footertop">
		            	<div className="footertoptext"><a href="#"> &#9650; Back to top</a></div>
		            </div>
		            <div className="footermain">
		            	<div className="footerCenter">
		            		<div className="footerForm">
		            			<h3>SING UP TO OUR DAILY MAIL</h3>
		            			<form>  
		            				<input placeholder="Email address" type="text"></input>
		            				<button>Sing up</button>
		            			</form>
		            		</div>
		            		<div className="footerSoc">
		            			<ul>
		            				<li>FACEBOOK</li>
		            				<li>TWITTER</li>
		            				<li>GOOGLE</li>
		            				<li>INSTAGRAM</li>
		            			</ul>
		            		</div>
		            		<div className="footerMenu">
		            			<ul>
		            				<li>SOLVE TECHNICAL ISSUE</li>
		            				<li>COMPLAINTS & CORRECTIONS</li>
		            				<li>TERMS & CONDITIONS</li>
		            				<li>PRIVACY POLICY</li>
		            			</ul>
		            		</div>
		            	</div>

		            	<div className="footerCopy">
		            		<hr/>
		            		<p>Copyright&copy;2017 NewsPortal. All Rights Reserved.</p>
		            	</div>
		            </div>
		</div>
		);
	}
}
export default Footer;