import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

export default function Work() {

	return(
		<Box sx={{
			height: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
			<Timeline position="alternate">
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: 'auto 0' }}
						align="right"
						variant="body2"
						color="text.secondary"
					>
						June 2023
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						<TimelineDot color="primary" variant="outlined">
							<WorkOutlineOutlinedIcon />
						</TimelineDot>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<Typography variant="h6" component="span">
							Senior Engineer
						</Typography>
						<Typography>Ramboll</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: 'auto 0' }}
						variant="body2"
						color="text.secondary"
					>
						June 2021
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						<TimelineDot color="primary" variant="outlined">
							<WorkOutlineOutlinedIcon />
						</TimelineDot>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<Typography variant="h6" component="span">
							Engineer
						</Typography>
						<Typography>Ramboll</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: 'auto 0' }}
						align="right"
						variant="body2"
						color="text.secondary"
					>
						September 2019
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						<TimelineDot color="primary" variant="outlined">
							<WorkOutlineOutlinedIcon />
						</TimelineDot>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<Typography variant="h6" component="span">
							Graduate Engineer
						</Typography>
						<Typography>Ramboll</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: 'auto 0' }}
						variant="body2"
						color="text.secondary"
					>
						Summer 2017 & 2018
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						<TimelineDot color="primary" variant="outlined">
							<WorkOutlineOutlinedIcon />
						</TimelineDot>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<Typography variant="h6" component="span">
							Undergraduate Engineer
						</Typography>
						<Typography>Ramboll</Typography>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</Box>
	);
}