import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Logo from '../../assets/logo.png';

export default function Sidebar() {
	const drawerWidth = '10vw';
	const currentYear = new Date().getFullYear();

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
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative', height: '100%' }}>
					<img src={Logo} height={50} width={50} style={{ position: 'absolute', top: 0 }} />
					<Divider />
					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<IconButton>
							<HomeOutlinedIcon fontSize='large'/>
						</IconButton>
						<IconButton>
							<PersonOutlineOutlinedIcon fontSize='large'/>
						</IconButton>
						<IconButton>
							<WorkOutlineOutlinedIcon fontSize='large'/>
						</IconButton>
						<IconButton>
							<SchoolOutlinedIcon fontSize='large'/>
						</IconButton>
						<IconButton>
							<LayersOutlinedIcon fontSize='large'/>
						</IconButton>
						<IconButton>
							<CreateOutlinedIcon fontSize='large'/>
						</IconButton>
						<IconButton>
							<ChatBubbleOutlineOutlinedIcon fontSize='large'/>
						</IconButton>
					</Box>
					<Divider />
					<Typography
						sx={{
							typography: { md: 'caption' },
							position: 'absolute',
							bottom: '0',
							alignSelf: 'flex-end',
							width: '100%',
							textAlign: 'center',
							padding: '8px',
						}}
						color="textSecondary"
					>
						Copyright &copy; {currentYear} Iman Warsame
					</Typography>
				</Box>
			</Drawer>
		</Box>
	);
}