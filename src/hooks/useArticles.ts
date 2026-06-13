import { useEffect, useState } from 'react';

export interface Article {
	id: string;
	title: string;
	date: string; // ISO date string e.g. "2024-03-23"
	url: string;
	mdFile: string;
}

export function useArticles() {
	const [articles, setArticles] = useState<Article[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('/articles/index.json')
			.then((r) => r.json())
			.then((data: Article[]) => setArticles(data))
			.catch((err) => console.error('Failed to load articles index:', err))
			.finally(() => setLoading(false));
	}, []);

	return { articles, loading };
}
