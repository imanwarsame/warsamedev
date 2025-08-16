import { Box, Stack, Text, ActionIcon } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import AnimatedText from '../title/AnimatedText';
import Lottie from 'lottie-react';
import animatedScrollDark from '../../assets/scroll-down-dark.json';
import animatedScrollLight from '../../assets/scroll-down-light.json';
import { useDevStore } from '../../store';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

export default function Landing() {
	const { darkMode } = useDevStore();
	const strings = ['Full-stack developer', 'Chartered civil engineer', 'Photographer'];
	const isMdUp = useMediaQuery('(min-width: 768px)');

	return (
		<>
			<Box
				style={{
					position: 'absolute',
					top: '50%',
					left: isMdUp ? '2%' : '10%',
					zIndex: 2,
				}}
			>
				<Stack gap="xs">
					<Text fw={700} size="2rem">
						Iman Warsame
					</Text>
					<AnimatedText items={strings} />
					{isMdUp && (
						<Stack>
							<Box style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
								<ActionIcon
									component="a"
									href="https://github.com/imanwarsame"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Silhoutte of an octopus cat hybrid"
									size="lg"
									variant="subtle"
								>
									<IconBrandGithub size={32} color="var(--mantine-color-primary-6)" />
								</ActionIcon>
								<ActionIcon
									component="a"
									href="https://www.linkedin.com/in/imanwarsame/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="The letters i and n representing the LinkedIn logo"
									size="lg"
									variant="subtle"
								>
									<IconBrandLinkedin size={36} color="var(--mantine-color-primary-6)" />
								</ActionIcon>
							</Box>
						</Stack>
					)}
				</Stack>
			</Box>
			<Box
				style={{
					position: 'absolute',
					bottom: '20px',
					left: '50%',
					transform: 'translateX(-50%)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Lottie
					animationData={darkMode ? animatedScrollLight : animatedScrollDark}
					height={200}
					width={200}
					style={{ color: 'orange' }}
				/>
			</Box>
		</>
	);
}
