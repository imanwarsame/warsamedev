import { Container, Title, Text, Modal, Stack, useMantineTheme } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight, IconCamera } from '@tabler/icons-react';
import { photos } from './PhotographyData.tsx';
import type { Photo } from './PhotographyData.tsx';
import { useDevStore } from '../../store';

function useViewportWidth() {
	const [width, setWidth] = useState(() => window.innerWidth);

	useEffect(() => {
		const onResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return width;
}

function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(
		() => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const onChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
		mediaQuery.addEventListener('change', onChange);
		return () => mediaQuery.removeEventListener('change', onChange);
	}, []);

	return prefersReducedMotion;
}

/** Individual photo item — observes intersection then fades in once loaded */
function PhotoItem({
	photo,
	index,
	onOpen,
	reducedMotion,
}: {
	photo: Photo;
	index: number;
	onOpen: (i: number) => void;
	reducedMotion: boolean;
}) {
	const [loaded, setLoaded] = useState(false);
	const [hovered, setHovered] = useState(false);

	const reveal = reducedMotion || loaded;

	return (
		<div
			onClick={() => onOpen(index)}
			role='button'
			tabIndex={0}
			aria-label={`View photo ${photo.id}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					onOpen(index);
				}
			}}
			style={{
				breakInside: 'avoid',
				marginBottom: 16,
				borderRadius: 12,
				overflow: 'hidden',
				cursor: 'pointer',
				position: 'relative',
				opacity: reveal ? 1 : 0,
				transform: reveal ? 'translateY(0)' : 'translateY(12px)',
				boxShadow: hovered ? '0 12px 32px rgba(0, 0, 0, 0.15)' : 'none',
				transition: reducedMotion
					? 'none'
					: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s ease',
			}}
		>
			<img
				src={photo.src}
				alt={photo.title || `Photo ${photo.id}`}
				width={photo.width}
				height={photo.height}
				loading='lazy'
				decoding='async'
				onLoad={() => setLoaded(true)}
				style={{
					display: 'block',
					width: '100%',
					height: 'auto',
					borderRadius: 12,
					transition: reducedMotion ? 'none' : 'filter 0.3s ease',
				}}
			/>
			{photo.title && reveal && (
				<div
					style={{
						position: 'absolute',
						inset: 0,
						background: 'linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, transparent 50%)',
						opacity: hovered ? 1 : 0,
						transition: reducedMotion ? 'none' : 'opacity 0.3s ease',
						display: 'flex',
						alignItems: 'flex-end',
						padding: 16,
						borderRadius: 12,
						pointerEvents: 'none',
					}}
				>
					<span
						style={{
							color: '#fff',
							fontSize: '0.9rem',
							fontWeight: 500,
							textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
						}}
					>
						{photo.title}
					</span>
				</div>
			)}
		</div>
	);
}

export default function Photography() {
	const { darkMode } = useDevStore();
	const theme = useMantineTheme();
	const viewportWidth = useViewportWidth();
	const reducedMotion = usePrefersReducedMotion();
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
	const [lightboxHovered, setLightboxHovered] = useState<'prev' | 'next' | null>(null);

	const isMobile = viewportWidth <= 600;
	const isTablet = viewportWidth <= 1100;
	const columnCount = isMobile ? 1 : isTablet ? 2 : 3;
	const columnGap = isMobile ? 12 : 16;
	const pageTopPadding = isMobile ? 100 : 120;
	const navButtonSize = isMobile ? 36 : 44;

	const openLightbox = (index: number) => setLightboxIndex(index);
	const closeLightbox = () => setLightboxIndex(null);

	const goNext = useCallback(() => {
		if (lightboxIndex === null) return;
		setLightboxIndex((lightboxIndex + 1) % photos.length);
	}, [lightboxIndex]);

	const goPrev = useCallback(() => {
		if (lightboxIndex === null) return;
		setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
	}, [lightboxIndex]);

	// Keyboard navigation
	useEffect(() => {
		if (lightboxIndex === null) return;

		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') goNext();
			else if (e.key === 'ArrowLeft') goPrev();
			else if (e.key === 'Escape') closeLightbox();
		};

		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	}, [lightboxIndex, goNext, goPrev]);

	const currentPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;

	return (
		<div
			style={{
				minHeight: '100vh',
				paddingTop: pageTopPadding,
				paddingBottom: 60,
				background: darkMode
					? theme.other?.darkBackground || '#0f0f0f'
					: theme.other?.lightBackground || '#ffffff',
			}}
		>
			<Container size='xl'>
				<Stack gap='xs' mb='xl' align='center'>
					<Title
						order={1}
						style={{
							fontSize: 'clamp(2rem, 5vw, 3rem)',
							fontWeight: 700,
							color: darkMode ? '#fafafa' : '#18181b',
						}}
					>
						Photography
					</Title>
					<Text size='lg' c='dimmed' maw={600} ta='center'>
						A collection of moments captured through my lens.
					</Text>
				</Stack>

				{photos.length === 0 ? (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							minHeight: '40vh',
							opacity: 0.5,
						}}
					>
						<IconCamera size={64} stroke={1.2} color={darkMode ? '#71717a' : '#a1a1aa'} />
						<Text size='lg' c='dimmed' mt='md'>
							Photos coming soon
						</Text>
					</div>
				) : (
					<div
						style={{
							columnCount,
							columnGap,
						}}
					>
						{photos.map((photo, index) => (
							<PhotoItem
								key={photo.id}
								photo={photo}
								index={index}
								onOpen={openLightbox}
								reducedMotion={reducedMotion}
							/>
						))}
					</div>
				)}
			</Container>

			{/* Lightbox Modal */}
			<Modal
				opened={lightboxIndex !== null}
				onClose={closeLightbox}
				size='auto'
				centered
				withCloseButton={false}
				overlayProps={{ backgroundOpacity: 0.85, blur: 4 }}
				padding={0}
				radius='md'
				styles={{
					content: {
						background: 'transparent',
						boxShadow: 'none',
						maxWidth: '95vw',
						maxHeight: '95vh',
						overflow: 'visible',
					},
					body: {
						padding: 0,
						position: 'relative',
					},
				}}
			>
				{currentPhoto && (
					<div style={{ position: 'relative' }}>
						<img
							src={currentPhoto.src}
							alt={currentPhoto.title || `Photo ${currentPhoto.id}`}
							style={{
								maxWidth: '90vw',
								maxHeight: '80vh',
								objectFit: 'contain',
								borderRadius: 8,
								display: 'block',
								margin: '0 auto',
							}}
						/>

						{photos.length > 1 && (
							<>
								<button
									type='button'
									onClick={(e) => {
										e.stopPropagation();
										goPrev();
									}}
									onMouseEnter={() => setLightboxHovered('prev')}
									onMouseLeave={() => setLightboxHovered(null)}
									aria-label='Previous photo'
									style={{
										position: 'absolute',
										top: '50%',
										left: 12,
										transform: 'translateY(-50%)',
										zIndex: 10,
										background:
											lightboxHovered === 'prev' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.4)',
										border: 'none',
										borderRadius: '50%',
										width: navButtonSize,
										height: navButtonSize,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										cursor: 'pointer',
										color: '#fff',
										transition: reducedMotion ? 'none' : 'background 0.2s ease',
										backdropFilter: 'blur(8px)',
									}}
								>
									<IconChevronLeft size={24} />
								</button>
								<button
									type='button'
									onClick={(e) => {
										e.stopPropagation();
										goNext();
									}}
									onMouseEnter={() => setLightboxHovered('next')}
									onMouseLeave={() => setLightboxHovered(null)}
									aria-label='Next photo'
									style={{
										position: 'absolute',
										top: '50%',
										right: 12,
										transform: 'translateY(-50%)',
										zIndex: 10,
										background:
											lightboxHovered === 'next' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.4)',
										border: 'none',
										borderRadius: '50%',
										width: navButtonSize,
										height: navButtonSize,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										cursor: 'pointer',
										color: '#fff',
										transition: reducedMotion ? 'none' : 'background 0.2s ease',
										backdropFilter: 'blur(8px)',
									}}
								>
									<IconChevronRight size={24} />
								</button>
							</>
						)}

						<Text
							c={darkMode ? '#a1a1aa' : '#71717a'}
							style={{
								textAlign: 'center',
								marginTop: 12,
								fontSize: '0.85rem',
								opacity: 0.7,
							}}
						>
							{currentPhoto.title && `${currentPhoto.title} · `}
							{(lightboxIndex ?? 0) + 1} / {photos.length}
						</Text>
					</div>
				)}
			</Modal>
		</div>
	);
}
