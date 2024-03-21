import { Button, Stack, useTheme } from '@mui/material';
import './TextEffect.css';

interface NavLink {
	title: string;
	action: () => void;
}

interface NavLinksProps {
	links: NavLink[];
}

export default function NavigationLinks({ links }: NavLinksProps) {
	const theme = useTheme();

	return (
		<Stack
			direction='row'
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'transparent',
				border: '0px solid green',
				width: 'auto',
				height: 'auto',
				paddingTop: '5px',
				'.navLink::after': {
					backgroundColor: theme.palette.primary.main,
				},
			}}
			spacing={3}
		>
			{links.map((link, index) => (
				<Button
					key={index}
					className='navLink'
					size='large'
					sx={{ color: theme.palette.text.primary }}
					onClick={link.action}
				>
					{link.title}
				</Button>
			))}
		</Stack>
	);
}
