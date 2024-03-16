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
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Element } from 'react-scroll';

export default function Experience() {
	return (
		<Element name='experience_element'>
			<Box
				component='div'
				sx={{
					height: '100svh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: '50px',
					paddingBottom: '50px',
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
							June 2023
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
							<TimelineDot color='primary' variant='outlined'>
								<WorkOutlineOutlinedIcon />
							</TimelineDot>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						</TimelineSeparator>
						<TimelineContent sx={{ py: '12px', px: 2 }}>
							<Typography sx={{ typography: { sm: 'h6' }, fontWeight: 'bold' }} component='span'>
								Senior Engineer
							</Typography>
							<Typography sx={{ typography: { sm: 'body1', xs: 'caption' } }}>Ramboll</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2' color='text.secondary'>
							June 2021
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
							<TimelineDot color='primary' variant='outlined'>
								<WorkOutlineOutlinedIcon />
							</TimelineDot>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						</TimelineSeparator>
						<TimelineContent sx={{ py: '12px', px: 2 }}>
							<Typography sx={{ typography: { sm: 'h6' }, fontWeight: 'bold' }} component='span'>
								Engineer
							</Typography>
							<Typography sx={{ typography: { sm: 'body1', xs: 'caption' } }}>Ramboll</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: 'auto 0' }}
							align='right'
							variant='body2'
							color='text.secondary'
						>
							September 2019
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
							<TimelineDot color='primary' variant='outlined'>
								<WorkOutlineOutlinedIcon />
							</TimelineDot>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						</TimelineSeparator>
						<TimelineContent sx={{ py: '12px', px: 2 }}>
							<Typography sx={{ typography: { sm: 'h6' }, fontWeight: 'bold' }} component='span'>
								Graduate Engineer
							</Typography>
							<Typography sx={{ typography: { sm: 'body1', xs: 'caption' } }}>Ramboll</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2' color='text.secondary'>
							Summer 2017 & 2018
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
							<TimelineDot color='primary' variant='outlined'>
								<WorkOutlineOutlinedIcon />
							</TimelineDot>
							<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						</TimelineSeparator>
						<TimelineContent sx={{ py: '12px', px: 2 }}>
							<Typography sx={{ typography: { sm: 'h6' }, fontWeight: 'bold' }} component='span'>
								Intern
							</Typography>
							<Typography sx={{ typography: { sm: 'body1', xs: 'caption' } }}>Ramboll</Typography>
						</TimelineContent>
					</TimelineItem>
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
				</Timeline>
			</Box>
		</Element>
	);
}
