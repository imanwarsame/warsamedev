import { Box, Text, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useDevStore } from '../../store';

interface CardProps {
	title: string;
	date: string;
	url: string;
}

export default function ArticleCard({ title, date, url }: CardProps) {
	const navigate = useNavigate();
	const { darkMode } = useDevStore();

	const borderColor = darkMode ? 'rgba(59, 130, 246, 0.2)' : '#bfdbfe';
	const titleColor = darkMode ? '#e2e8f0' : '#0f172a';
	const dateColor = darkMode ? '#475569' : '#64748b';
	const accentColor = darkMode ? '#60a5fa' : '#3b82f6';

	return (
		<Box
			onClick={() => navigate(url)}
			className='article-card-item'
			style={{
				paddingTop: '1.25rem',
				paddingBottom: '1.25rem',
				borderBottom: `1px solid ${borderColor}`,
				cursor: 'pointer',
			}}
		>
			<Group justify='space-between' align='center' gap='md'>
				<Box style={{ flex: 1 }}>
					<Text
						fw={600}
						style={{
							fontSize: '1.05rem',
							lineHeight: 1.4,
							color: titleColor,
							marginBottom: '0.3rem',
						}}
					>
						{title}
					</Text>
					<Text size='sm' style={{ color: dateColor }}>
						{date}
					</Text>
				</Box>
				<Text
					size='sm'
					style={{
						color: accentColor,
						fontWeight: 500,
						whiteSpace: 'nowrap',
						flexShrink: 0,
					}}
				>
					Read →
				</Text>
			</Group>
		</Box>
	);
}
