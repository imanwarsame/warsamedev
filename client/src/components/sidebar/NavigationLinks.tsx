import { Stack } from '@mui/material';
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
				height: 'auto',
				padding: 0,
			}}
			spacing={5}
		>
			{links.map((text, index) => (
				<a key={index} href='#' className='cta'>
					<span>{text}</span>
				</a>
			))}
		</Stack>
	);
}
