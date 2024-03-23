import { Button, Divider, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface CardProps {
	title: string;
	date: string;
	url: string;
}

export default function ArticleCard({ title, date, url }: CardProps) {
	const navigate = useNavigate();

	return (
		<Paper
			component={motion.div}
			variant='outlined'
			sx={{
				width: { xs: '80vw', md: '50vw' },
				height: 'auto',
				paddingTop: 3,
				paddingBottom: 1,
				paddingX: 3,
			}}
		>
			<Stack direction='column'>
				<Typography sx={{ typography: { xs: 'h6', md: 'h4' } }}>{title}</Typography>
				<Divider sx={{ paddingTop: 2 }} />
				<Stack
					direction='row'
					sx={{
						marginTop: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography sx={{ typography: { xs: 'body2', md: 'body2' } }}>{date}</Typography>
					<Button onClick={() => navigate(url)}>Read more</Button>
				</Stack>
			</Stack>
		</Paper>
	);
}
