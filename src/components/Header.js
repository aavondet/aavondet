import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useRouteMatch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ breakpoints }) => ({
    gridContainer: {
        padding: '50px',
        [breakpoints.down('sm')]: {
            padding: '50px 0px',
		},
    },
    headerNavList: {
        listStyle: 'none',
        textAlign: 'end',
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
            [breakpoints.down('sm')]: {
                padding: '0px 10px',
            },
        },
        [breakpoints.down('sm')]: {
            textAlign: 'center',
            paddingInlineStart: '0px',
		},
    },
    headerTitle: {
		'& a': {
			color: 'white',
        	padding: '50px',
        	fontSize: 'x-large',
        	textDecoration: 'none',
        },
        [breakpoints.down('sm')]: {
            textAlign: 'center',
		},
    }, 
}));

const Header = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.gridContainer}>
            <Grid item xs='12' md='6'>
                <h1 className={classes.headerTitle}><a href='/'>aavondet</a></h1>
            </Grid>
            <Grid item xs='12' md='6'>
                <nav>
                    <ul className={classes.headerNavList}>
                        <li><NavItem label='home' to='/' active={true}/></li>
                        <li><NavItem label='work' to='/work'/></li>
                        <li><NavItem label='projects' to='/projects'/></li>
                    </ul>
                </nav>
            </Grid>
		</Grid>
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
