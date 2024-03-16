import { Grid } from '@mui/material';
import Card from './Card/Card';
import { projects } from './ProjectData';
import { Element } from 'react-scroll';

export default function Portfolio() {
	return (
		<Element name='projects_element'>
			<Grid container spacing={2} sx={{ padding: 10 }}>
				{projects.map((item) => (
					<Card {...item} key={item.id} />
				))}
			</Grid>
		</Element>
	);
}
