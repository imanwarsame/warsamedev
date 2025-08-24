import { useState, useRef, useEffect } from 'react';
import { Box, Skeleton } from '@mantine/core';

interface LazyImageProps {
	src: string;
	alt: string;
	width?: number | string;
	height?: number | string;
	className?: string;
}

export default function LazyImage({
	src,
	alt,
	width = '100%',
	height = 'auto',
	className,
}: LazyImageProps) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isIntersecting, setIsIntersecting] = useState(false);
	const imgRef = useRef<HTMLImageElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsIntersecting(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 },
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const handleImageLoad = () => {
		setIsLoaded(true);
	};

	return (
		<Box ref={containerRef} style={{ width, height }} className={className}>
			{isIntersecting ? (
				<>
					<img
						ref={imgRef}
						src={src}
						alt={alt}
						onLoad={handleImageLoad}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							opacity: isLoaded ? 1 : 0,
							transition: 'opacity 0.3s ease',
						}}
						loading='lazy'
					/>
					{!isLoaded && (
						<Skeleton
							height={typeof height === 'number' ? height : 200}
							style={{ position: 'absolute', top: 0, left: 0 }}
						/>
					)}
				</>
			) : (
				<Skeleton height={typeof height === 'number' ? height : 200} />
			)}
		</Box>
	);
}
