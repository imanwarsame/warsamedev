import { Button, Divider, Paper, Stack, Title, Text, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface CardProps {
	title: string;
	date: string;
	url: string;
}

export default function ArticleCard({ title, date, url }: CardProps) {
	const navigate = useNavigate();

	return (
		<Paper
			withBorder
			p='lg'
			style={{
				width: '100%',
			}}
		>
			<Stack gap='sm'>
				<Title order={3} size='h4'>
					{title}
				</Title>
				<Divider />
				<Group justify='space-between' align='center'>
					<Text size='sm' c='dimmed'>
						{date}
					</Text>
					<Button variant='light' color='green' onClick={() => navigate(url)}>
						Read more
					</Button>
				</Group>
			</Stack>
		</Paper>
	);
}
