import { Box, Stack, Text, useMantineTheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { articles } from './ArticlesData';
import ArticleCard from './ArticleCard';

export default function Articles() {
	const theme = useMantineTheme();
	const sortedArticles = articles.sort((a, b) => {
		const dateA = a.date instanceof Date ? a.date : new Date(a.date);
		const dateB = b.date instanceof Date ? b.date : new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: 'easeInOut' }}
		>
			<Box
				style={{
					width: '100%',
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
					paddingLeft: '20px',
					paddingRight: '20px',
				}}
			>
				<Stack gap="md" style={{ paddingTop: '15vh', width: '100%', maxWidth: '1200px' }}>
					{sortedArticles.map((article) => (
						<ArticleCard
							key={article.id}
							title={article.title}
							date={(article.date instanceof Date ? article.date : new Date(article.date)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
							url={article.url}
						/>
					))}
					
					{/* Footer */}
					<Box style={{ 
						marginTop: '4vh', 
						paddingTop: '2vh', 
						borderTop: `1px solid ${theme.colors.gray[3]}`,
						textAlign: 'center' 
					}}>
						<Text size='sm' c='dimmed'>
							© 2025 Iman Warsame
						</Text>
					</Box>
				</Stack>
			</Box>
		</motion.div>
	);
}
