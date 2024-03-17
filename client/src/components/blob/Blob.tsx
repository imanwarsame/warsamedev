import { Canvas } from '@react-three/fiber';
import { Box } from '@mui/material';
import NoiseSphere from './NoiseSphere';
import { Element } from 'react-scroll';
import Home from '../home/Home';
// import { OrbitControls } from '@react-three/drei';
// import { Perf } from 'r3f-perf';

export default function Blob() {
	return (
		<Element name='home_element'>
			<Box
				component='div'
				sx={{
					position: 'relative',
					height: '100svh',
					width: '100%',
					overflowX: 'hidden',
					opacity: 0.9,
				}}
			>
				<Canvas camera={{ position: [0, 0, 15] }} resize={{ scroll: false }}>
					{/* <OrbitControls /> */}
					{/* <axesHelper args={[10]} /> */}
					{/* {import.meta.env.DEV && <Perf position='bottom-right' />} */}
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
				<Home />
			</Box>
		</Element>
	);
}
