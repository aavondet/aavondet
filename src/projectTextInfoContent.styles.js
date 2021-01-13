import makeStyles from '@material-ui/core/styles/makeStyles';

const projectTextInfoContentStyles = ({ spacing }) => {
	return {
		overline: {
			textTransform: 'uppercase',
			letterSpacing: '1px',
			fontSize: 12,
			marginBottom: '0.875em',
			display: 'inline-block',
			color: 'white',
		},
		heading: {
			fontSize: 20,
			fontWeight: 'bold',
			marginBottom: '0.35em',
			color: 'white',
		},
		body: {
			marginBottom: spacing(2),
			fontSize: 12,
			letterSpacing: '0.00938em',
			color: 'white',
		},
	};
};

const useProjectTextInfoContentStyles = makeStyles(projectTextInfoContentStyles, { name: "ProjectTextInfoContent" });

export { projectTextInfoContentStyles, useProjectTextInfoContentStyles };
