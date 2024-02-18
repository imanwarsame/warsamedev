import { ListItem, Stack, Typography } from '@mui/material';
import './TextEffect.css';

interface NavLinksProps {
	links: string[];
}

export default function NavigationLinks({ links }: NavLinksProps) {
	return (
		<Stack
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				bgcolor: 'transparent',
				border: '1px solid green',
				width: 'auto',
				height: '100vh',
				padding: 3,
			}}
			spacing={5}
		>
			{links.map((text, index) => (
				<ListItem
					key={index}
					sx={{
						position: 'relative',
						cursor: 'pointer',
						textAlign: 'center',
					}}
					onClick={() => console.log(text)}
				>
					<Typography
						variant='h6'
						className='navigation-links'
						sx={{
							textTransform: 'uppercase',
							textDecoration: 'none',
							color: (theme) => theme.palette.text.primary,
						}}
					>
						{text}
					</Typography>
				</ListItem>
			))}
		</Stack>
	);
}
