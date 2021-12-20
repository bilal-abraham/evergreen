import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Error404 from './pages/Error404.jsx';

const firebaseConfig = {
	apiKey: 'AIzaSyDW40w2BJ_IgUI3Z5TuBWD5hhNA1N1hlr8',
	authDomain: 'the-evergreen-project.firebaseapp.com',
	p2rojectId: 'the-evergreen-project',
	storageBucket: 'the-evergreen-project.appspot.com',
	messagingSenderId: '95102526674',
	appId: '1:95102526674:web:8709a3004001bc0949f90b',
	measurementId: 'G-SZHKV1TF4T',
};

initializeApp(firebaseConfig);
// getAnalytics(firebaseConfig);

const App = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route path='/' component={Error404} />
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
