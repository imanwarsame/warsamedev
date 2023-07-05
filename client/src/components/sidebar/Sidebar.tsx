import { Box, Divider, Drawer, IconButton, Theme, Typography, useMediaQuery } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Logo from '../../assets/logo.png';

export default function Sidebar() {
	const drawerWidth = '7vw';

	const currentYear = new Date().getFullYear();
	const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
	const copyrightText = isLargeScreen ? '© ' + currentYear : 'Copyright © ' + currentYear + ' Iman Warsame';

	return(
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<Drawer variant="permanent" anchor="left"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						minWidth: 50,
						boxSizing: 'border-box',
					},
				}}
			>
				<Box sx={{ display: 'flex', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative', height: '100%' }}>
					<img src={Logo} height={50} width={50} style={{ position: 'absolute', top: 5 }} />
					<Divider />
					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<IconButton disableFocusRipple disableRipple sx={{ backgroundColor: 'transparent' }}>
							<HomeOutlinedIcon sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}/>
						</IconButton>
						<IconButton disableFocusRipple disableRipple sx={{ backgroundColor: 'transparent' }}>
							<PersonOutlineOutlinedIcon sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}/>
						</IconButton>
						<IconButton disableFocusRipple disableRipple sx={{ backgroundColor: 'transparent' }}>
							<WorkOutlineOutlinedIcon sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}/>
						</IconButton>
						<IconButton disableFocusRipple disableRipple sx={{ backgroundColor: 'transparent' }}>
							<SchoolOutlinedIcon sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}/>
						</IconButton>
						<IconButton disableFocusRipple disableRipple sx={{ backgroundColor: 'transparent' }}>
							<LayersOutlinedIcon sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}/>
						</IconButton>
						<IconButton disableFocusRipple disableRipple sx={{ backgroundColor: 'transparent' }}>
							<CreateOutlinedIcon sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}/>
						</IconButton>
						<IconButton disableFocusRipple disableRipple sx={{ backgroundColor: 'transparent' }}>
							<ChatBubbleOutlineOutlinedIcon sx={{ fontSize: { xs: 20, md: 30 }, stroke: '#ffffff', strokeWidth: 0.5 }}/>
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
						color="textSecondary"
					>
						{copyrightText}
					</Typography>
				</Box>
			</Drawer>
		</Box>
	);
}