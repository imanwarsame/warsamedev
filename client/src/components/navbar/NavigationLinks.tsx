import { Button, Group, useMantineTheme } from '@mantine/core';
import './TextEffect.css';

interface NavLink {
	title: string;
	action: () => void;
}

interface NavLinksProps {
	links: NavLink[];
}

export default function NavigationLinks({ links }: NavLinksProps) {
	const theme = useMantineTheme();

	return (
		<Group
			gap="xl"
			style={{
				paddingTop: '5px',
			}}
		>
			<style>
				{`
					.navLink::after {
						background-color: ${theme.colors.green[4]} !important;
					}
				`}
			</style>
			{links.map((link, index) => (
				<Button
					key={index}
					className='navLink'
					variant="subtle"
					size="lg"
					color="green"
					onClick={link.action}
				>
					{link.title}
				</Button>
			))}
		</Group>
	);
}
