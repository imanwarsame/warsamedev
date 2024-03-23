import { Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { articles } from './ArticlesData';
import ArticleCard from './ArticleCard';

export default function Articles() {
	return (
		<Box
			component={motion.div}
			initial={{ opacity: 0 }} //Initial state (invisible)
			animate={{ opacity: 1 }} //Final state (fully visible)
			transition={{ duration: 1 }} //Duration of the fade-in effect
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'center',
			}}
		>
			<Stack direction='column' spacing={2} paddingTop='10vh'>
				{articles.map((article) => (
					<ArticleCard
						key={article.id}
						title={article.title.toString()}
						date={article.date.format('Do MMM YYYY').toString()}
						url={article.url.toString()}
					/>
				))}
			</Stack>
		</Box>
	);
}
