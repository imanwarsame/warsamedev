import { Box, Stack, Text, Title } from '@mantine/core';
import { IconBriefcase, IconSchool } from '@tabler/icons-react';
import { Element } from 'react-scroll';

const timelineData = [
	{
		date: 'September 2023',
		title: 'Chartered Engineer (CEng)',
		company: 'Institution of Civil Engineers',
		icon: IconBriefcase,
		isRight: false
	},
	{
		date: 'June 2023',
		title: 'Senior Engineer',
		company: 'Ramboll',
		icon: IconBriefcase,
		isRight: true
	},
	{
		date: 'June 2021',
		title: 'Engineer',
		company: 'Ramboll',
		icon: IconBriefcase,
		isRight: false
	},
	{
		date: 'September 2019',
		title: 'Graduate Engineer',
		company: 'Ramboll',
		icon: IconBriefcase,
		isRight: true
	},
	{
		date: 'Summer 2017 & 2018',
		title: 'Intern',
		company: 'Ramboll',
		icon: IconBriefcase,
		isRight: false
	},
	{
		date: '2015-2019',
		title: 'Civil Engineering, MEng',
		company: 'University of Southampton',
		icon: IconSchool,
		isRight: true
	}
];

export default function Experience() {
	return (
		<Element name='experience_element'>
			<Box
				style={{
					width: '100vw',
					height: '100svh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: '50px',
					paddingBottom: '50px',
					padding: '50px 20px',
				}}
			>
				<Box style={{ position: 'relative', maxWidth: '1200px', width: '100%' }}>
					{/* Central timeline line */}
					<Box
						style={{
							position: 'absolute',
							left: '50%',
							top: 0,
							bottom: 0,
							width: '2px',
							backgroundColor: 'var(--mantine-color-primary-6)',
							transform: 'translateX(-50%)',
							zIndex: 0
						}}
					/>
					
					<Stack gap="xl">
						{timelineData.map((item, index) => {
							const IconComponent = item.icon;
							return (
								<Box
									key={index}
									style={{
										display: 'flex',
										alignItems: 'center',
										position: 'relative',
										flexDirection: item.isRight ? 'row-reverse' : 'row'
									}}
								>
									{/* Date section */}
									<Box style={{ flex: '0 0 45%', textAlign: item.isRight ? 'left' : 'right' }}>
										<Text size="sm" c="dimmed">
											{item.date}
										</Text>
									</Box>
									
									{/* Timeline dot */}
									<Box
										style={{
											flex: '0 0 10%',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											position: 'relative',
											zIndex: 1
										}}
									>
										<Box
											style={{
												width: '40px',
												height: '40px',
												borderRadius: '50%',
												backgroundColor: 'var(--mantine-color-body)',
												border: '2px solid var(--mantine-color-primary-6)',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center'
											}}
										>
											<IconComponent size={20} color="var(--mantine-color-primary-6)" />
										</Box>
									</Box>
									
									{/* Content section */}
									<Box style={{ flex: '0 0 45%', textAlign: item.isRight ? 'right' : 'left' }}>
										<Title order={5} fw={700}>
											{item.title}
										</Title>
										<Text size="sm">
											{item.company}
										</Text>
									</Box>
								</Box>
							);
						})}
					</Stack>
				</Box>
			</Box>
		</Element>
	);
}
