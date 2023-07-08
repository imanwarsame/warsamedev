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
          9:30 am
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
            Eat
						</Typography>
						<Typography>Because you need strength</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: 'auto 0' }}
						variant="body2"
						color="text.secondary"
					>
          10:00 am
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
            Code
						</Typography>
						<Typography>Because it&apos;s awesome!</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						<TimelineDot color="primary" variant="outlined">
							<WorkOutlineOutlinedIcon />
						</TimelineDot>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<Typography variant="h6" component="span">
            Sleep
						</Typography>
						<Typography>Because you need rest</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						<TimelineDot color="primary" variant="outlined">
							<WorkOutlineOutlinedIcon />
						</TimelineDot>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<Typography variant="h6" component="span">
							Repeat
						</Typography>
						<Typography>Because this is the life you love!</Typography>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</Box>
	);
}