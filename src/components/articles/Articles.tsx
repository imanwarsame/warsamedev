import { Box, Stack, Text, Title } from '@mantine/core';
import { articles } from './ArticlesData';
import ArticleCard from './ArticleCard';
import { useDevStore } from '../../store';
import './articles.css';

export default function Articles() {
	const { darkMode } = useDevStore();
	const currentYear = new Date().getFullYear();
	const sortedArticles = articles.sort((a, b) => {
		const dateA = a.date instanceof Date ? a.date : new Date(a.date);
		const dateB = b.date instanceof Date ? b.date : new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});

	const borderColor = darkMode ? 'rgba(59, 130, 246, 0.2)' : '#bfdbfe';
	const titleColor = darkMode ? '#f1f5f9' : '#0f172a';
	const footerColor = darkMode ? '#475569' : '#94a3b8';

	return (
		<Box
			className='articles-page'
			style={{
				display: 'flex',
				justifyContent: 'center',
				paddingLeft: '1.5rem',
				paddingRight: '1.5rem',
			}}
		>
			<Stack
				gap={0}
				style={{
					paddingTop: '14vh',
					paddingBottom: '6vh',
					width: '100%',
					maxWidth: '720px',
				}}
			>
				{/* Header */}
				<Box
					style={{
						marginBottom: '2.5rem',
						borderBottom: `2px solid ${borderColor}`,
						paddingBottom: '1.5rem',
					}}
				>
					<Title
						order={1}
						style={{
							fontSize: '2rem',
							fontWeight: 700,
							color: titleColor,
							lineHeight: 1.2,
						}}
					>
						Articles
					</Title>
				</Box>

				{/* Article list */}
				{sortedArticles.map((article) => (
					<ArticleCard
						key={article.id}
						title={article.title}
						date={(article.date instanceof Date
							? article.date
							: new Date(article.date)
						).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
						url={article.url}
					/>
				))}

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
			</Stack>
		</Box>
	);
}
