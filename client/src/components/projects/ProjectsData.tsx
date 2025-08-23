import GPI from '../../assets/Projects/GPI.png';
import Garviz from '../../assets/Projects/Garviz.png';

export const projects = [
	{
		id: 1,
		title: 'GPI Designer',
		imageUrl: GPI,
		webLink: 'https://designer.groundplug.dk/',
		githubLink: null,
		featured: true,
		description:
			'A comprehensive web application for designing and analyzing ground plug installations. Features advanced 3D visualization, real-time calculations, and automated report generation for civil engineering projects.',
		technologies: ['React', 'TypeScript', 'Three.js', 'Node.js', 'PostgreSQL', 'WebGL'],
		videoUrl: null,
		category: 'Full Stack Development',
		year: '2024',
		role: 'Lead Developer & Product Owner',
		highlights: [
			'3D visualization engine for complex engineering calculations',
			'Real-time collaboration features for engineering teams',
			'Automated PDF report generation with custom templates',
			'Integration with industry-standard engineering software',
		],
	},
	{
		id: 2,
		title: 'Garviz',
		imageUrl: Garviz,
		webLink: 'https://garviz.net/',
		githubLink: 'https://github.com/imanwarsame/garviz',
		featured: true,
		description:
			'An innovative data visualization platform that transforms complex datasets into interactive, beautiful charts and graphs. Built with modern web technologies for optimal performance and user experience.',
		technologies: ['React', 'D3.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Chart.js'],
		videoUrl: null,
		category: 'Data Visualization',
		year: '2023',
		role: 'Full Stack Developer',
		highlights: [
			'Interactive data visualization with D3.js',
			'Real-time data processing and analysis',
			'Responsive design for all device types',
			'Export capabilities for various formats',
		],
	},
	{
		id: 5,
		title1: 'Smart',
		title2: 'Bridge',
		title: 'Smart Bridge Monitoring',
		imageUrl: null,
		webLink: null,
		githubLink: null,
		featured: true,
		description:
			'An IoT-based bridge monitoring system that uses sensors to collect real-time structural health data. Includes predictive analytics for maintenance scheduling and safety assessments.',
		technologies: [
			'Python',
			'IoT Sensors',
			'Machine Learning',
			'AWS',
			'React Dashboard',
			'Time Series DB',
		],
		videoUrl: '/videos/smart-bridge-demo.mp4',
		category: 'Civil Engineering Tech',
		year: '2024',
		role: 'Principal Engineer & Developer',
		highlights: [
			'Real-time structural health monitoring',
			'Predictive maintenance algorithms',
			'Mobile alerts for critical conditions',
			'Historical data analysis and reporting',
		],
	},
];
export const featuredProjects = projects.filter((project) => project.featured);
