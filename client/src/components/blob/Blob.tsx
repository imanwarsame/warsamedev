import { Canvas } from '@react-three/fiber';
import { Box } from '@mui/material';
import NoiseSphere from './NoiseSphere';
// import { OrbitControls } from '@react-three/drei';
// import { Perf } from 'r3f-perf';

export default function Blob() {
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
		</Box>
	);
}
