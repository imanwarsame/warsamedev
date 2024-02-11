import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
} from '@mui/lab';
import { Box, Typography } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Element } from 'react-scroll';

export default function Education() {
	return (
		<Element name='education_element'>
			<Box
				component='div'
				sx={{
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Timeline position='alternate'>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: 'auto 0' }}
							align='right'
							variant='body2'
							color='text.secondary'
						>
							2015-2019
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
							<TimelineDot color='primary' variant='outlined'>
								<SchoolOutlinedIcon />
							</TimelineDot>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						</TimelineSeparator>
						<TimelineContent sx={{ py: '12px', px: 2 }}>
							<Typography sx={{ typography: { sm: 'h6' }, fontWeight: 'bold' }} component='span'>
								Civil Engineering, MEng
							</Typography>
							<Typography sx={{ typography: { sm: 'body1', xs: 'caption' } }}>
								University of Southampton
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2' color='text.secondary'>
							2008-2015
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
							<TimelineDot color='primary' variant='outlined'>
								<SchoolOutlinedIcon />
							</TimelineDot>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						</TimelineSeparator>
						<TimelineContent sx={{ py: '12px', px: 2 }}>
							<Typography sx={{ typography: { sm: 'h6' }, fontWeight: 'bold' }} component='span'>
								A Levels & GCSEs
							</Typography>
							<Typography sx={{ typography: { sm: 'body1', xs: 'caption' } }}>
								Ruislip High School
							</Typography>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</Box>
		</Element>
	);
}
