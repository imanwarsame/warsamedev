import { Stack } from '@mui/material';
import './TextEffect.css';

interface NavLinksProps {
	links: string[];
}

export default function NavigationLinks({ links }: NavLinksProps) {
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
				padding: 0,
			}}
			spacing={3}
		>
			{links.map((text, index) => (
				<a key={index} href='#' className='cta' style={{ border: '0px solid orange' }}>
					<span>{text}</span>
				</a>
			))}
		</Stack>
	);
}
