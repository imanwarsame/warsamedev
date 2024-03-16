import { Button, Stack, useTheme } from '@mui/material';
import './TextEffect.css';

interface NavLinksProps {
	links: string[];
	onClickHandler: (link: string) => void;
}

export default function NavigationLinks({ links, onClickHandler }: NavLinksProps) {
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
			{links.map((text, index) => (
				<Button
					key={index}
					className='navLink'
					size='large'
					sx={{ color: theme.palette.text.primary }}
					onClick={() => onClickHandler(text)}
				>
					{text}
				</Button>
			))}
		</Stack>
	);
}
