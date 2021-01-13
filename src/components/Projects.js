import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useProjectTextInfoContentStyles } from '../projectTextInfoContent.styles';

import DMedia from '../../public/projects/dmedia.png';
import LunchApp from '../../public/projects/lunchapp.png';
import BikePGH from '../../public/projects/bikepgh.png';
import Numberpedia from '../../public/projects/numberpedia.png';
const images = [DMedia, LunchApp, BikePGH, Numberpedia];
import projects from '../projects.json';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
	media: {
		width: '88%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: spacing(-3),
		height: 0,
		paddingBottom: '48%',
		borderRadius: spacing(2),
		position: 'relative',
		[breakpoints.up('md')]: {
			width: '350px',
			marginLeft: spacing(-3),
			marginTop: 0,
			transform: 'translateX(-20px)',
		},
	},
	card: {
		margin: '60px auto',
		color: 'white',
		backgroundColor: '#272E47',
		borderRadius: spacing(2), // 16px
		transition: '0.3s',
		boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
		position: 'relative',
		maxWidth: 600,
		marginLeft: 'auto',
		borderWidth: '1px',
		borderStyle: 'solid',
		overflow: 'initial',
		background: '#ffffff',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingBottom: spacing(2),
		[breakpoints.up('md')]: {
			flexDirection: 'row',
			paddingTop: spacing(2),
		},
	},
	cardContent: {
		width: '40%',
	},
	button: {
		backgroundColor: 'Transparent',
		color: 'white',
		borderRadius: '10px',
		borderColor: 'white',
		borderWidth: '2px',
		borderStyle: 'solid',
		padding: '8px',
		'&:hover': {
			backgroundColor: 'white',
			color: '#272E47',
		},
	}
}));

const Projects = () => {
	const classes = useStyles();
	const contentClasses = useProjectTextInfoContentStyles();
	return (
		<>
			{projects.map((project) => 
				<Card className={classes.card}>
					<CardMedia
						className={classes.media}
                        image={images[project.id]}
                        alt={project.alt}
					/>
					<CardContent className={classes.cardContent}>
						<TextInfoContent
							classes={contentClasses}
							overline={project.date}
							heading={project.title}
							body={project.description}
						/>
						<Button className={classes.button} target='_blank' href={project.link} rel='noopener'>Github</Button>
					</CardContent>
				</Card>
			)}
		</>	
	);
};

export default Projects;
