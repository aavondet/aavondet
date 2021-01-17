import React from 'react';
import AvatarL from '../../public/avatar_large.png';
import AvatarS from '../../public/avatar_small.png';
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
            fontSize: '16px',
		},
	},
	homeAvatarContainer: {
		maxWidth: '100%',
        textAlign: 'center',
    },
    homeAvatar: {
        width: '400px',
        height: '400px',
        [breakpoints.down('sm')]: {
            width: '200px',
            height: '200px',
		},
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
			<Grid item xs='12' md='6' className={classes.homeAvatarContainer}>
				<img className={classes.homeAvatar} src={AvatarL} srcSet={`${AvatarS} 300w, ${AvatarL} 1280w`} alt='Picture of Arnaud'/>
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
                    alt='Open Twitter profile for aavondet_'
                    rel='noopener'
				>
					<GitHubIcon fontSize='inherit'/>
				</IconButton>
				<IconButton
					href='https://twitter.com/aavondet_'
					target='_blank'
                    className={classes.button}
                    alt='Open Github profile for aavondet'
                    rel='noopener'
				>
					<TwitterIcon fontSize='inherit'/>
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default Home;
