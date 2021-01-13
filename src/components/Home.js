import React from 'react';
import Avatar from '../../public/avatar.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(({ breakpoints }) => ({
	homeParagraph: {
		fontSize: '24px',
		margin: 'auto',
		[breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	},
	homeAvatar: {
		maxWidth: '100%',
		textAlign: 'center',
	},
	button: {
		color: 'white',
		margin: '0px',
		fontSize: 'xx-large',
	}
}));

const Home = () => {
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item xs='12' md='6' className={classes.homeAvatar}>
				<img src={Avatar}/>
			</Grid>
			<Grid item xs='12' md='6' className={classes.homeParagraph}>
				<p>
				Hello!<br/>
				My name is Arnaud, I’m an undergrad<br/>
				at Carnegie Mellon University<br/>
				studying Mathematics and Computer<br/>
				Science.
				</p>
				<IconButton
					href='https://github.com/aavondet'
					target='_blank'
					className={classes.button}
				>
					<GitHubIcon fontSize='inherit'/>
				</IconButton>
				<IconButton
					href='https://twitter.com/aavondet_'
					target='_blank'
					className={classes.button}
				>
					<TwitterIcon fontSize='inherit'/>
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default Home;
