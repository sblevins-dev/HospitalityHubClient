import { styled, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography, Paper } from "@mui/material"
import { NavLink } from "react-router-dom"
import "./Menu.css"
import { useTheme } from "@mui/material/styles"
import SpaceDashboardTwoToneIcon from '@mui/icons-material/SpaceDashboardTwoTone';
import BedroomChildTwoToneIcon from '@mui/icons-material/BedroomChildTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import BookOnlineTwoToneIcon from '@mui/icons-material/BookOnlineTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';

const MyNavLink = styled(NavLink)(() => ({
    textDecoration: 'none',
    color: 'white',
    width: '100%',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
}))

const Menu = () => {

    return (
        <Box bgcolor={'#181d1c'} color={'white'} sx={{ borderRight: '1px solid rgb(240, 240, 240)' }}>
            <Typography variant="h4" sx={{ paddingY: 4, bgcolor: '#434b50', paddingX: 1, color: 'white', fontFamily: 'fantasy', letterSpacing: '2px' }}>HospitalityHub</Typography>
            <Box sx={{ marginY: 5, padding: 2, }} elevation={0}>
                <Typography variant="h5" paddingBottom={1}>Michael Levito</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <AdminPanelSettingsTwoToneIcon />
                    <Typography variant="body2">
                        Administrator
                    </Typography>
                </Box>
            </Box>
            <Divider color='gray' />
            <List sx={{ marginY: '20px' }}>
                <ListItem disablePadding>
                    <MyNavLink to="/">
                        <ListItemButton>
                            <SpaceDashboardTwoToneIcon sx={{ marginRight: '20px' }} />
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </MyNavLink>
                </ListItem>
                <ListItem disablePadding>
                    <MyNavLink to="/reservations">
                        <ListItemButton>
                            <BookOnlineTwoToneIcon sx={{ marginRight: '20px' }} />
                            <ListItemText primary="Reservations" />
                        </ListItemButton>
                    </MyNavLink>
                </ListItem>
                <ListItem disablePadding>
                    <MyNavLink to="/guests">
                        <ListItemButton>
                            <PermIdentityTwoToneIcon sx={{ marginRight: '20px' }} />
                            <ListItemText primary="Guests" />
                        </ListItemButton>
                    </MyNavLink>
                </ListItem>
                <ListItem disablePadding>
                    <MyNavLink to="/rooms">
                        <ListItemButton>
                            <BedroomChildTwoToneIcon sx={{ marginRight: '20px' }} />
                            <ListItemText primary="Rooms" />
                        </ListItemButton>
                    </MyNavLink>
                </ListItem>
            </List>
            <Divider color="gray" />
        </Box>
    )
}

export default Menu