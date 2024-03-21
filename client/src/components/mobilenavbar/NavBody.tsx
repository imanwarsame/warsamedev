import { Box, Button, Typography, IconButton, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { JSX } from 'react/jsx-runtime';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface LinkType {
	title: string;
	href: string;
}

interface NavBodyProps {
	links: LinkType[];
	selectedLink: {
		isActive: boolean;
		index: number;
	};
	setSelectedLink: (link: { isActive: boolean; index: number }) => void;
	handleRouteChange: (href: string) => void;
}

export default function NavBody({
	links,
	selectedLink,
	setSelectedLink,
	handleRouteChange,
}: NavBodyProps) {
	const theme = useTheme();

	const blur = {
		initial: {
			filter: 'blur(0px)',
			opacity: 1,
		},
		open: {
			filter: 'blur(4px)',
			opacity: 0.6,
			transition: { duration: 0.3 },
		},
		closed: {
			filter: 'blur(0px)',
			opacity: 1,
			transition: { duration: 0.3 },
		},
	};

	const translate = {
		initial: {
			y: '10vh',
			opacity: 0,
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		enter: (i: any[]) => ({
			y: 0,
			opacity: 1,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		exit: (i: any[]) => ({
			y: '10vh',
			opacity: 0,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
		}),
	};

	const getChars = (word: string) => {
		const chars: JSX.Element[] = [];
		word.split('').forEach((char, i) => {
			chars.push(
				<motion.span
					className={char + i}
					custom={[i * 0.1, (word.length - i) * 0.01]}
					variants={translate}
					initial='initial'
					animate='enter'
					exit='exit'
					key={char + i}
				>
					{char}
				</motion.span>,
			);
		});
		return chars;
	};

	return (
		<Box
			component='div'
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				paddingTop: '100px',
			}}
		>
			{links.map((link, index) => {
				const { title, href } = link;

				return (
					<Button key={`l_${index}`} onClick={() => handleRouteChange(href)} disableRipple>
						<Typography
							className={`l_${index}`}
							onMouseOver={() => {
								setSelectedLink({ isActive: true, index });
							}}
							onMouseLeave={() => {
								setSelectedLink({ isActive: false, index });
							}}
							variants={blur}
							animate={selectedLink.isActive && selectedLink.index != index ? 'open' : 'closed'}
							variant='h2'
							color={theme.palette.text.primary}
							component={motion.p}
						>
							{getChars(title)}
						</Typography>
					</Button>
				);
			})}
			<Stack direction='row' spacing={2} sx={{ paddingTop: '20px' }}>
				<IconButton
					size='large'
					href='https://github.com/imanwarsame'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Silhoutte of an octopus cat hybrid'
					sx={{ minWidth: 0, height: 40, width: 40 }}
					disableRipple
				>
					<GitHubIcon color='action' sx={{ fontSize: '40px' }} />
				</IconButton>
				<IconButton
					size='medium'
					href='https://www.linkedin.com/in/imanwarsame/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='The letters i and n representing the LinkedIn logo'
					sx={{ minWidth: 0, height: 40, width: 40 }}
					disableRipple
				>
					<LinkedInIcon color='action' sx={{ fontSize: '45px' }} />
				</IconButton>
			</Stack>
		</Box>
	);
}
