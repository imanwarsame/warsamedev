import { Container, Title, Text, Badge, Stack, Box, useMantineTheme, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useDevStore } from '../../store';
import { LogoLoop } from '../logoLoop/LogoLoop';
import type { LogoItem } from '../logoLoop/LogoLoop';
import { books } from './BooksData';

export default function Books() {
	const theme = useMantineTheme();
	const { darkMode } = useDevStore();
	const isMobile = useMediaQuery('(max-width: 768px)');

	const bookHeight = 120;

	const booksLogos: LogoItem[] = books.map((book) => ({
		node: (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '8px',
					maxWidth: '100px',
				}}
			>
				<Box
					style={{
						width: '80px',
						height: `${bookHeight}px`,
						borderRadius: '8px',
						overflow: 'hidden',
						transition: 'transform 0.2s ease',
						position: 'relative',
						// Prevent flickering during animations
						transform: 'translateZ(0)',
						backfaceVisibility: 'hidden',
					}}
				>
					<Image
						src={book.coverImage}
						alt={`${book.title} by ${book.author}`}
						fit='cover'
						style={{
							width: '100%',
							height: '100%',
						}}
					/>
				</Box>
				<div style={{ textAlign: 'center', maxWidth: '100px' }}>
					<Text
						size='xs'
						fw={600}
						style={{
							color: darkMode ? '#ffffff' : '#000000',
							lineHeight: 1.2,
							marginBottom: '2px',
						}}
						lineClamp={2}
					>
						{book.title}
					</Text>
					<Text
						size='xs'
						style={{
							color: darkMode ? '#a0a0a0' : '#666666',
							lineHeight: 1.1,
						}}
						lineClamp={1}
					>
						{book.author}
					</Text>
				</div>
			</div>
		),
		title: book.title,
		ariaLabel: `${book.title} by ${book.author}`,
	}));

	return (
		<Box
			py={isMobile ? 60 : 100}
			style={{
				width: '100vw',
				background: darkMode ? theme.other.background.default : theme.other.background.default,
			}}
		>
			<Container size='lg'>
				{/* Section Header */}
				<Stack align='center' gap='md' mb={60}>
					<Badge size='lg' variant='light' color={darkMode ? 'orange' : 'grape'}>
						Reading List
					</Badge>
					<Title
						order={2}
						size={isMobile ? 'h3' : 'h2'}
						ta='center'
						style={{
							color: darkMode ? '#ffffff' : '#000000',
						}}
					>
						Favourite Books
					</Title>
					<Text
						size='lg'
						ta='center'
						maw={600}
						style={{
							color: darkMode ? '#a0a0a0' : '#666666',
							lineHeight: 1.6,
						}}
					>
						A collection of books that have shaped my thinking and inspired my approach to
						engineering, leadership, and life
					</Text>
				</Stack>

				{/* Books Loop */}
				<LogoLoop
					logos={booksLogos}
					speed={30}
					direction='right'
					logoHeight={bookHeight + 60} // Extra space for text
					gap={30}
					pauseOnHover={true}
					scaleOnHover={true}
					fadeOut={true}
					fadeOutColor={darkMode ? '#0f0f0f' : '#ffffff'}
					ariaLabel='Favourite books'
				/>
			</Container>
		</Box>
	);
}
