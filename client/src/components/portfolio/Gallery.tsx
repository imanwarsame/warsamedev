import { Divider, Stack, Typography } from '@mui/material';
import { projects } from './ProjectData';
import Project from './Project';
import { Element } from 'react-scroll';

export default function Gallery() {
	return (
		<Element name='projects_element'>
			<Stack
				direction='column'
				spacing={2}
				divider={
					<Divider
						orientation='horizontal'
						sx={{ borderBottomWidth: 5, borderBottomRightRadius: '50%' }}
						flexItem
					/>
				}
				sx={{
					padding: { xs: 3, md: 10 },
					width: { xs: '90vw', md: '75vw' },
					textAlign: 'start',
				}}
			>
				<Typography>Featured projects</Typography>
				{projects.map((item) => (
					<Project {...item} key={item.id} />
				))}
			</Stack>
		</Element>
	);
}
