import { Box, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { articles } from './ArticlesData';
import ArticleCard from './ArticleCard';
import moment from 'moment';

export default function Articles() {
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
				</Stack>
			</Box>
		</motion.div>
	);
}
