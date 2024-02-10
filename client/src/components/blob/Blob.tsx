import { Canvas } from '@react-three/fiber';
import { Box } from '@mui/material';
import NoiseSphere from './NoiseSphere';
import ScrambleText from '../title/ScrambledText';
// import { OrbitControls } from '@react-three/drei';
// import { Perf } from 'r3f-perf';

export default function Blob() {
	const strings = [
		'Full-stack developer',
		'Chartered civil engineer',
		'Photographer',
		'Humannnnnnn',
	];
	const timeDelay = 2000; // milliseconds

	return (
		<Box
			component="div"
			sx={{
				position: 'relative',
				height: '100vh',
				width: '100%',
				overflowX: 'hidden',
				opacity: 0.9,
				border: 1,
			}}
		>
			<Canvas camera={{ position: [0, 0, 15] }}>
				{/* <OrbitControls />
				<Perf position="bottom-left" />
				<axesHelper args={[10]} /> */}
				<ambientLight intensity={Math.PI / 2} />
				<spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					decay={0}
					intensity={Math.PI}
				/>
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				<NoiseSphere position={[0, 0, 0]} />
			</Canvas>
			<Box
				component="div"
				sx={{
					position: 'absolute',
					top: '50%',
					left: '2%',
					zIndex: 9999,
				}}
			>
				<ScrambleText strings={strings} timeDelay={timeDelay} />
			</Box>
		</Box>
	);
}
