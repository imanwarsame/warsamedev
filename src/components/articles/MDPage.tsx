/* eslint-disable indent */
import { Box, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import ReactMarkdown from 'react-markdown';
import { useDevStore } from '../../store';
import { articles } from './ArticlesData';
import './articles.css';

export default function MDPage({ fileName }: { fileName: string }) {
	const { darkMode } = useDevStore();
	const currentYear = new Date().getFullYear();
	const [content, setContent] = useState('');
	const isMobile = useMediaQuery('(max-width: 768px)');

	const article = articles.find((a) => a.mdFile === fileName);
	const formattedDate = article
		? (article.date instanceof Date ? article.date : new Date(article.date)).toLocaleDateString(
				'en-GB',
				{ day: 'numeric', month: 'long', year: 'numeric' },
			)
		: '';

	useEffect(() => {
		fetch(`/${fileName}.md`)
			.then((res) => res.text())
			.then((text) => setContent(text))
			.catch((error) => console.error('Error fetching file:', error));

		window.scrollTo(0, 0);
	}, [fileName]);

	// Split title (first h1) from body
	const lines = content.split('\n');
	const titleLineIndex = lines.findIndex((l) => l.startsWith('# '));
	const title = titleLineIndex !== -1 ? lines[titleLineIndex].replace(/^#\s+/, '') : '';
	const bodyContent =
		titleLineIndex !== -1
			? lines
					.filter((_, i) => i !== titleLineIndex)
					.join('\n')
					.trim()
			: content;

	const bgColor = darkMode ? '#0b1120' : '#f0f7ff';
	const borderColor = darkMode ? 'rgba(59, 130, 246, 0.2)' : '#bfdbfe';
	const footerColor = darkMode ? '#475569' : '#94a3b8';
	const titleColor = darkMode ? '#f1f5f9' : '#0f172a';
	const dateColor = darkMode ? '#64748b' : '#64748b';

	return (
		<Box style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
			{/* Hero — full viewport height */}
			<Box
				style={{
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					paddingLeft: isMobile ? '1.25rem' : '7.5vw',
					paddingRight: isMobile ? '1.25rem' : '7.5vw',
					paddingBottom: '4vh',
					paddingTop: '12vh',
					maxWidth: '1200px',
					margin: '0 auto',
					boxSizing: 'border-box',
				}}
			>
				<Box
					style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
				>
					{/* Title */}
					{title && (
						<Text
							component='h1'
							style={{
								fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(3rem, 5vw, 4.5rem)',
								fontWeight: 700,
								lineHeight: 1.1,
								color: titleColor,
								margin: 0,
								marginBottom: '2rem',
								letterSpacing: '-0.02em',
							}}
						>
							{title}
						</Text>
					)}

					{/* Date */}
					<Text
						size='sm'
						style={{
							color: dateColor,
							marginBottom: '3rem',
						}}
					>
						{formattedDate}
					</Text>
				</Box>

				{/* Divider at bottom of hero */}
				<Box style={{ borderTop: `1px solid ${borderColor}` }} />
			</Box>

			{/* Article body */}
			<Box
				style={{
					maxWidth: isMobile ? '100%' : '720px',
					margin: '0 auto',
					paddingLeft: isMobile ? '1.25rem' : '1.5rem',
					paddingRight: isMobile ? '1.25rem' : '1.5rem',
					paddingTop: '4rem',
					paddingBottom: '6vh',
				}}
			>
				<div className='article-content'>
					<ReactMarkdown>{bodyContent}</ReactMarkdown>
				</div>

				{/* Footer */}
				<Box
					style={{
						marginTop: '4rem',
						paddingTop: '1.5rem',
						borderTop: `1px solid ${borderColor}`,
						textAlign: 'center',
					}}
				>
					<Text size='sm' style={{ color: footerColor }}>
						© {currentYear} Iman Warsame
					</Text>
				</Box>
			</Box>
		</Box>
	);
}
