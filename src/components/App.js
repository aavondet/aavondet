import React from 'react';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import Projects from './Projects';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

const Main = () => {
	return (
    	<Router>
			<Header/>
			<Switch>
			<Route exact path='/'>
				<Home/>
			</Route>
			<Route path='/work'>
				<Work/>
			</Route>
			<Route path='/projects'>
				<Projects/>
			</Route>
			</Switch>
    	</Router>
	);
};

export default Main;
