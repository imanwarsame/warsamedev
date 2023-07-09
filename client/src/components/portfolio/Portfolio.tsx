import { Grid } from '@mui/material';
import Card from './Card/Card';
import { projects } from './ProjectData';

export default function Portfolio() {

	return(
		<Grid container spacing={2} sx={{ padding: 10 }}>
			{projects.map((item) => (
				<Card data={item} key={item.id} />
			))}
		</Grid>
	);
}