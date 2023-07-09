import { Grid } from '@mui/material';
import Card from './Card/Card';
import { projects } from './ProjectData';

export default function Portfolio() {
	console.log(projects[0]);

	return(
		<Grid container spacing={2} sx={{ padding: 10 }}>
			{projects.map((item) => (
				<Card {...item} key={item.id} />
			))}
		</Grid>
	);
}