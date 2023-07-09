import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { PortfolioItem } from './Types';
import GithubIcon from './github.svg';
import WebIcon from './earth.svg';


export default function ProjectModal ({ data, close }: { data: PortfolioItem, close: () => void }) {

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5
			}
		}
	};

	const item = {
		hidden: { opacity: 0, y: '10vh' },
		show: { opacity: 1, y: '0vh' }
	};

	return (
		<motion.div variants={container} initial="hidden" animate="show">
			<Box position='fixed'
				sx={{
					backgroundColor: 'rgba(255,255,255,0.75)',
					backdropFilter: 'blur(20px)',
					borderRadius: 5,
					width: { xs: '80vw', md: '50vw' },
					left: '50%',
					transform: 'translateX(-50%)',
					top: '50px'
				}}
			>
				<img src={data.imageUrl} width='100%'></img>
				<Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
					<motion.div>
						<motion.div variants={item}>
							<Typography>{data.description}</Typography>
						</motion.div>
						<Stack direction='row' justifyContent='center'>
							<motion.div variants={item}>
								<IconButton size='medium' href={data.githubLink} target="_blank" rel="noopener noreferrer">
									<img src={GithubIcon} alt='Silhoutte of an octopus cat hybrid' height={30}/>
								</IconButton>
							</motion.div>
							<motion.div variants={item}>
								<IconButton size='medium' href={data.webLink} target="_blank" rel="noopener noreferrer">
									<img src={WebIcon} alt='Planet earth, signifying website' height={30}/>
								</IconButton>
							</motion.div>
						</Stack>
					</motion.div>
				</Box>
				<IconButton size='medium' onClick={close} sx={{ alignSelf: 'center' }}>
					<CancelOutlinedIcon/>
				</IconButton>
			</Box>
		</motion.div>
	);
}