import { Box, Stack, Text, useMantineTheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { articles } from './ArticlesData';
import ArticleCard from './ArticleCard';
import moment from 'moment';

export default function Articles() {
	const theme = useMantineTheme();
	const sortedArticles = articles.sort((a, b) => moment(b.date).diff(moment(a.date)));

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
							title={article.title.toString()}
							date={article.date.format('Do MMM YYYY').toString()}
							url={article.url.toString()}
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
