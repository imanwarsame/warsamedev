import { Box, Divider, Drawer, IconButton, Theme, Typography, useMediaQuery } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LogoLight from '../../assets/logo_light_mode.png';
import LogoDark from '../../assets/logo_dark_mode.png';
import { scroller } from 'react-scroll';
import { useDevStore } from '../../store';

export default function Sidebar() {
	const { darkMode } = useDevStore();
	const drawerWidth = '7vw';
	const currentYear = new Date().getFullYear();
	const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
	const copyrightText = isLargeScreen
		? '© ' + currentYear
		: 'Copyright © ' + currentYear + ' Iman Warsame';

	const scrollToElement = (elementName: string) => {
		scroller.scrollTo(elementName, {
			duration: 3000, // Duration of the scroll animation in milliseconds
			delay: 0, // Delay before scrolling begins in milliseconds
			smooth: 'easeInOutQuart', // Scrolling animation easing function
		});
	};

	return (
		<Box component='div' sx={{ display: 'flex', justifyContent: 'center' }}>
			<Drawer
				variant='permanent'
				anchor='left'
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						minWidth: 50,
						backgroundColor: 'transparent',
						boxSizing: 'border-box',
					},
				}}
			>
				<Box
					component='div'
					sx={{
						display: 'flex',
						overflow: 'hidden',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						position: 'relative',
						height: '100%',
					}}
				>
					<img
						src={darkMode ? LogoDark : LogoLight}
						height={50}
						width={50}
						style={{ position: 'absolute', top: 5 }}
						aria-label='IW-letters-logo'
					/>
					<Divider />
					<Box
						component='div'
						sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
					>
						<IconButton
							disableFocusRipple
							disableRipple
							sx={{ backgroundColor: 'transparent' }}
							onClick={() => scrollToElement('home_element')}
							aria-label='home-button'
						>
							<HomeOutlinedIcon
								sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}
							/>
						</IconButton>
						<IconButton
							disableFocusRipple
							disableRipple
							sx={{ backgroundColor: 'transparent' }}
							onClick={() => scrollToElement('about_element')}
							aria-label='about-me-button'
						>
							<PersonOutlineOutlinedIcon
								sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}
							/>
						</IconButton>
						<IconButton
							disableFocusRipple
							disableRipple
							sx={{ backgroundColor: 'transparent' }}
							onClick={() => scrollToElement('experience_element')}
							aria-label='experience-button'
						>
							<WorkOutlineOutlinedIcon
								sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}
							/>
						</IconButton>
						<IconButton
							disableFocusRipple
							disableRipple
							sx={{ backgroundColor: 'transparent' }}
							onClick={() => scrollToElement('portfolio_element')}
							aria-label='portfolio-button'
						>
							<LayersOutlinedIcon
								sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}
							/>
						</IconButton>
						<IconButton
							disableFocusRipple
							disableRipple
							sx={{ backgroundColor: 'transparent' }}
							onClick={() => scrollToElement('contact_element')}
							aria-label='contact-button'
						>
							<ChatBubbleOutlineOutlinedIcon
								sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}
							/>
						</IconButton>
					</Box>
					<Divider />
					<Typography
						sx={{
							typography: { xs: 'caption' },
							position: 'absolute',
							bottom: '0',
							alignSelf: 'flex-end',
							width: '100%',
							textAlign: 'center',
							padding: '8px',
						}}
						color='textSecondary'
					>
						{copyrightText}
					</Typography>
				</Box>
			</Drawer>
		</Box>
	);
}
