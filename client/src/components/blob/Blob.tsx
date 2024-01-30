import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box } from '@mui/material';
import NoiseSphere from './NoiseSphere';

export default function Blob() {
	return (
		<Box component="div" sx={{ height: '100vh', border: 1 }}>
			<Canvas>
				<OrbitControls />
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
