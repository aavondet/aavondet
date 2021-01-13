import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles';

import jobs from '../jobs.json';

const useStyles = makeStyles({
	dot: {
    	padding: '10px',
	},
	company: {
		fontSize: '20px',
	},
	title: {
		fontSize: '20px',
		fontStyle: 'italic',
	},
	date: {
		fontSize: '20px',
	},
	description: {
		fontSize: '16px',
		paddingBottom: '20px',
	},
	timeline: {
		width: '65%',
		margin: 'auto',
		paddingBottom: '50px',
	},
});

const Work = () => {
	const classes = useStyles();
	return (
		<Timeline classes={{root: classes.timeline}}>
			{jobs.map((job) =>
				<TimelineItem>
					<TimelineOppositeContent classes={{root: classes.date}}>
						{job.date}
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot variant='outlined' classes={{root: classes.dot}}/>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<div className={classes.company}>{job.company}</div><br/>
						<div className={classes.title}>{job.title}</div><br/>
						<div className={classes.description}>{job.description}</div>
					</TimelineContent>
				</TimelineItem>
			)}
		</Timeline>
	);
};

export default Work;
