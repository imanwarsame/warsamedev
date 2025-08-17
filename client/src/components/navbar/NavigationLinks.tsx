import { Group, useMantineTheme, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { useDevStore } from '../../store';

interface NavLink {
	title: string;
	action: () => void;
}

interface NavLinksProps {
	links: NavLink[];
}

export default function NavigationLinks({ links }: NavLinksProps) {
	const theme = useMantineTheme();
	const { darkMode } = useDevStore();

	return (
		<Group gap="lg" visibleFrom="md">
			{links.map((link, index) => (
				<motion.div
					key={index}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Text
						component="button"
						onClick={link.action}
						style={{
							background: 'none',
							border: 'none',
							cursor: 'pointer',
							padding: '8px 12px',
							borderRadius: theme.radius.md,
							color: darkMode 
								? theme.other.text.primary 
								: theme.other.text.primary,
							fontWeight: 500,
							fontSize: '0.9rem',
							transition: 'all 0.2s ease',
							position: 'relative',
							overflow: 'hidden',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = darkMode 
								? 'rgba(255, 255, 255, 0.1)' 
								: 'rgba(0, 0, 0, 0.05)';
							e.currentTarget.style.color = theme.colors.blue[6];
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = 'transparent';
							e.currentTarget.style.color = darkMode 
								? theme.other.text.primary 
								: theme.other.text.primary;
						}}
					>
						{link.title}
					</Text>
				</motion.div>
			))}
		</Group>
	);
}
