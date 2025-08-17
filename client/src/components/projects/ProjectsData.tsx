import WarsameDev from '../../assets/Projects/WarsameDev.png';
import OpenDetail from '../../assets/Projects/OpenDetail.png';
import GPI from '../../assets/Projects/GPI.png';
import Garviz from '../../assets/Projects/Garviz.png';

export const projects = [
	{
		id: 1,
		title1: 'GPI',
		title2: 'Designer',
		title: 'GPI Designer',
		imageUrl: GPI,
		webLink: 'https://designer.groundplug.dk/',
		githubLink: null,
		featured: true,
		description: 'A comprehensive web application for designing and analyzing ground plug installations. Features advanced 3D visualization, real-time calculations, and automated report generation for civil engineering projects.',
		technologies: ['React', 'TypeScript', 'Three.js', 'Node.js', 'PostgreSQL', 'WebGL'],
		videoUrl: null,
		category: 'Full Stack Development',
		year: '2024',
		role: 'Lead Developer & Product Owner',
		highlights: [
			'3D visualization engine for complex engineering calculations',
			'Real-time collaboration features for engineering teams',
			'Automated PDF report generation with custom templates',
			'Integration with industry-standard engineering software'
		]
	},
	{
		id: 2,
		title1: 'Gar',
		title2: 'viz',
		title: 'Garviz',
		imageUrl: Garviz,
		webLink: 'https://garviz.netlify.app/',
		githubLink: 'https://github.com/imanwarsame/garviz',
		featured: true,
		description: 'An innovative data visualization platform that transforms complex datasets into interactive, beautiful charts and graphs. Built with modern web technologies for optimal performance and user experience.',
		technologies: ['React', 'D3.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Chart.js'],
		videoUrl: null,
		category: 'Data Visualization',
		year: '2023',
		role: 'Full Stack Developer',
		highlights: [
			'Interactive data visualization with D3.js',
			'Real-time data processing and analysis',
			'Responsive design for all device types',
			'Export capabilities for various formats'
		]
	},
	{
		id: 3,
		title1: 'Warsame',
		title2: 'Dev',
		title: 'WarsaDev Portfolio',
		imageUrl: WarsameDev,
		webLink: 'https://warsame.dev/',
		githubLink: 'https://github.com/imanwarsame/warsamedev',
		featured: false,
		description: 'A modern, responsive portfolio website showcasing my work as a full-stack developer, product owner, and chartered civil engineer. Features smooth animations, dark mode, and optimized performance.',
		technologies: ['React', 'Mantine', 'TypeScript', 'Framer Motion', 'Vite', 'Netlify'],
		videoUrl: null,
		category: 'Portfolio',
		year: '2024',
		role: 'Developer & Designer',
		highlights: [
			'Modern design with smooth animations',
			'Fully responsive across all devices',
			'Dark/light mode toggle',
			'Optimized for performance and SEO'
		]
	},
	{
		id: 4,
		title1: 'Open',
		title2: 'Detail',
		title: 'OpenDetail',
		imageUrl: OpenDetail,
		webLink: null,
		githubLink: 'https://github.com/imanwarsame/opendetail',
		featured: false,
		description: 'An open-source project management tool designed for engineering teams. Features task tracking, collaborative workspaces, and integration with popular development tools.',
		technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
		videoUrl: null,
		category: 'Project Management',
		year: '2023',
		role: 'Open Source Contributor',
		highlights: [
			'Collaborative project management features',
			'Real-time updates and notifications',
			'Integration with GitHub and GitLab',
			'Customizable workflows and templates'
		]
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
		description: 'An IoT-based bridge monitoring system that uses sensors to collect real-time structural health data. Includes predictive analytics for maintenance scheduling and safety assessments.',
		technologies: ['Python', 'IoT Sensors', 'Machine Learning', 'AWS', 'React Dashboard', 'Time Series DB'],
		videoUrl: '/videos/smart-bridge-demo.mp4',
		category: 'Civil Engineering Tech',
		year: '2024',
		role: 'Principal Engineer & Developer',
		highlights: [
			'Real-time structural health monitoring',
			'Predictive maintenance algorithms',
			'Mobile alerts for critical conditions',
			'Historical data analysis and reporting'
		]
	},
	{
		id: 6,
		title1: 'Eco',
		title2: 'Calc',
		title: 'EcoCalc Sustainability Tool',
		imageUrl: null,
		webLink: null,
		githubLink: null,
		featured: true,
		description: 'A comprehensive sustainability calculator for construction projects. Helps engineers and architects make environmentally conscious decisions by calculating carbon footprints and suggesting alternatives.',
		technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Machine Learning', 'PDF Generation'],
		videoUrl: '/videos/ecocalc-demo.mp4',
		category: 'Sustainability Tech',
		year: '2023',
		role: 'Product Owner & Lead Developer',
		highlights: [
			'Carbon footprint calculations for materials',
			'Alternative material suggestions',
			'Compliance reporting for green certifications',
			'Mobile app for field assessments'
		]
	}
];

export const projectCategories = [
	'All',
	'Full Stack Development',
	'Data Visualization',
	'Civil Engineering Tech',
	'Sustainability Tech',
	'Portfolio',
	'Project Management'
];

export const featuredProjects = projects.filter(project => project.featured);