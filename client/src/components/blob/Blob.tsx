import { Canvas } from '@react-three/fiber';
import { Box, Stack, Typography } from '@mui/material';
import NoiseSphere from './NoiseSphere';
import ScrambleText from '../title/ScrambledText';
import Lottie from 'lottie-react';
import animatedScrollDark from '../../assets/scroll-down-dark.json';
import animatedScrollLight from '../../assets/scroll-down-light.json';
import { Element } from 'react-scroll';
import { useDevStore } from '../../store';
// import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

export default function Blob() {
	const { darkMode } = useDevStore();
	const strings = ['Full-stack developer', 'Chartered civil engineer', 'Photographer'];
	const timeDelay = 5000; // milliseconds

	return (
		<Element name='home_element'>
			<Box
				component='div'
				sx={{
					position: 'relative',
					height: '100vh',
					width: '100%',
					overflowX: 'hidden',
					opacity: 0.9,
				}}
			>
				<Canvas camera={{ position: [0, 0, 15] }}>
					{/* <OrbitControls /> */}
					{/* <axesHelper args={[10]} /> */}
					{import.meta.env.DEV && <Perf position='bottom-right' />}
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
					component='div'
					sx={{
						position: 'absolute',
						top: '50%',
						left: { xs: '10%', md: '2%' },
						zIndex: 9999,
					}}
				>
					<Stack direction='column' spacing={1}>
						<Typography fontWeight='bold' sx={{ typography: { xs: 'h2', md: 'h2' } }}>
							Iman Warsame
						</Typography>
						<ScrambleText strings={strings} timeDelay={timeDelay} />
					</Stack>
				</Box>
				<Box
					component='div'
					display='flex'
					alignItems='center'
					justifyContent='center'
					sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
				>
					<Lottie
						animationData={darkMode ? animatedScrollLight : animatedScrollDark}
						height={200}
						width={200}
						style={{ color: 'orange' }}
					/>
				</Box>
			</Box>
		</Element>
	);
}
