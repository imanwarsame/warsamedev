import { Grid } from '@mui/material';
import Card from './Card/Card';
import { Element } from 'react-scroll';
import { projects } from './ProjectData';

export default function Portfolio() {

	return(
		<Element name='portfolio_element'>
			<Grid container spacing={2} sx={{ padding: 10 }}>
				{projects.map((item) => (
					<Card {...item} key={item.id}/>
				))}
			</Grid>
		</Element>
	);
}