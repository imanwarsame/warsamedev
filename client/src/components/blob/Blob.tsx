import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Box } from '@mui/material';
import NoiseSphere from './NoiseSphere';

export default function Blob() {
	return (
		<Box
			component="div"
			sx={{
				position: 'relative',
				height: '100vh',
				width: '100%',
				border: 1,
			}}
		>
			<Canvas
				camera={{ position: [5, 5, 5] }} // Adjust the camera position if needed
			>
				<OrbitControls />
				<ambientLight intensity={Math.PI / 2} />
				<Perf position="bottom-left" />
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
