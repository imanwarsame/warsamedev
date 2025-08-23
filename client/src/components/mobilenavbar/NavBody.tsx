import { Box, Button, Text, ActionIcon, Stack, useMantineTheme } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { JSX } from 'react/jsx-runtime';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { useEffect } from 'react';
import { useDevStore } from '../../store';

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
	isOpen: boolean;
}

export default function NavBody({
	links,
	selectedLink,
	setSelectedLink,
	handleRouteChange,
	isOpen,
}: NavBodyProps) {
	const theme = useMantineTheme();
	const { darkMode } = useDevStore();

	useEffect(() => {
		//Disable scrolling on mount
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		//Re-enable scrolling on unmount
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]); //Run only on component mount and unmount

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

	const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

	const height = {
		initial: {
			height: 0,
		},
		enter: {
			height: '100vh',
			transition,
		},
		exit: {
			height: 0,
			transition,
		},
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
		<AnimatePresence mode='wait'>
			{isOpen && (
				<Box
					component={motion.div}
					variants={height}
					initial='initial'
					animate='enter'
					exit='exit'
					style={{
						position: 'fixed',
						overflow: 'hidden',
						backgroundColor: theme.colors.gray[1],
						width: '100vw',
						zIndex: 4,
						display: 'flex',
						gap: '50px',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<Box
						style={{
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
								<Button 
									key={`l_${index}`} 
									onClick={() => handleRouteChange(href)} 
									variant="subtle"
									style={{ background: 'none' }}
								>
									<Text
										className={`l_${index}`}
										onMouseOver={() => {
											setSelectedLink({ isActive: true, index });
										}}
										onMouseLeave={() => {
											setSelectedLink({ isActive: false, index });
										}}
										variants={blur}
										animate={
											selectedLink.isActive && selectedLink.index != index ? 'open' : 'closed'
										}
										size="xl"
										c={theme.colors.dark[9]}
										component={motion.p}
									>
										{getChars(title)}
									</Text>
								</Button>
							);
						})}
						<Stack style={{ paddingTop: '20px' }}>
							<Box style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
								<ActionIcon
									component="a"
									size="lg"
									href="https://github.com/imanwarsame"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Silhoutte of an octopus cat hybrid"
									variant="subtle"
								>
									<IconBrandGithub size={32} color={darkMode ? theme.colors.gray[3] : theme.colors.gray[6]} />
								</ActionIcon>
								<ActionIcon
									component="a"
									size="lg"
									href="https://www.linkedin.com/in/imanwarsame/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="The letters i and n representing the LinkedIn logo"
									variant="subtle"
								>
									<IconBrandLinkedin size={36} color={darkMode ? theme.colors.gray[3] : theme.colors.gray[6]} />
								</ActionIcon>
							</Box>
						</Stack>
					</Box>
				</Box>
			)}
		</AnimatePresence>
	);
}
