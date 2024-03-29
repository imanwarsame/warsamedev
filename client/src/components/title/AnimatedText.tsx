import { Box } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

export default function AnimatedText({ items }: { items: string[] }) {
	//Create a new array with delays at the beginning and end, and between each string
	const sequenceWithDelays = [
		1000, // Initial delay
		...items.flatMap((str) => [str, 2000]), //Delay between each string
	];

	return (
		<Box
			component='div'
			sx={{ display: 'flex', alignItems: 'center', typography: { xs: 'caption', md: 'body1' } }}
		>
			<TypeAnimation
				preRenderFirstString={true}
				sequence={sequenceWithDelays}
				speed={50}
				style={{ fontSize: '2em' }}
				repeat={Infinity}
			/>
		</Box>
	);
}
