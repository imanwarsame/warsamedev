import { Box, Divider, Stack, Text } from '@mantine/core';
import { projects } from './ProjectData';
import Project from './Project';
import { Element } from 'react-scroll';

export default function Gallery() {
	return (
		<Element name='projects_element'>
			<Box
				style={{
					width: '100%',
					padding: '0 20px',
					maxWidth: '1200px',
					margin: '0 auto',
				}}
			>
				<Stack
					gap="md"
					style={{
						padding: 'clamp(24px, 5vw, 80px) 0',
						textAlign: 'start',
					}}
				>
					<Text>Featured projects</Text>
					{projects.map((item, index) => (
						<div key={item.id}>
							<Project {...item} />
							{index < projects.length - 1 && (
								<Divider 
									my="lg"
									style={{
										borderBottomWidth: '5px',
										borderBottomRightRadius: '50%'
									}}
								/>
							)}
						</div>
					))}
				</Stack>
			</Box>
		</Element>
	);
}
