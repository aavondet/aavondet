import React from 'react';
import Header from './Header';
import Home from './Home';
import Career from './Career';
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
			<Route exact path='/user/aavondet/'>
				<Home/>
			</Route>
			<Route path='/user/aavondet/career'>
				<Career/>
			</Route>
			<Route path='/user/aavondet/projects'>
				<Projects/>
			</Route>
			</Switch>
    	</Router>
	);
};

export default Main;
