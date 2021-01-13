import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	header: {
    	display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerNavList: {
    	listStyle: 'none',
		padding: '50px',
		'& li': {
			display: 'inline-block',
			padding: '0px 20px',
			transition: 'all 0.5s',
			'& a': {
				transition: 'all 0.5s',
        		color: 'white',
        		fontSize: '24px',
				textDecoration: 'none',
				'&:hover': {
					color: 'grey',
				},
			},
			'& .active': {
				textDecoration: 'underline',
			},
		},
    },
    headerTitle: {
		'& a': {
			color: 'white',
        	padding: '50px',
        	fontSize: 'x-large',
        	textDecoration: 'none',
		},
    }, 
}));

const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.header}>
			<h1 className={classes.headerTitle}><a href='/'>aavondet</a></h1>
			<nav>
				<ul className={classes.headerNavList}>
					<li><NavItem label='home' to='/' active={true}/></li>
					<li><NavItem label='work' to='/work'/></li>
					<li><NavItem label='projects' to='/projects'/></li>
				</ul>
			</nav>
		</div>
  	);
};

const NavItem = ({label, to, active}) => {
    let match = useRouteMatch({
        path: to,
        exact: active
    });

    return (
        <Link to={to} className={match ? "active" : ""}>{label}</Link>
    )
}

export default Header;
