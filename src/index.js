import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Headermenu from './headermenu';
import Footer from './footer';
import Topnews from './topnews';
import Sport from './sport';
import People from './people';
import Life from './life';
import Video from './video';
import Foto from './foto';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<div>
			<Route extract path="/" component={App} />
			<Route path="/topnews" component={Topnews} />
			<Route path="/sport" component={Sport} />
			<Route path="/people" component={People} />
			<Route path="/life" component={Life} />
			<Route path="/video" component={Video} />
			<Route path="/foto" component={Foto} />

		</div>
	</Router>, 
	document.getElementById('main'));
registerServiceWorker();
