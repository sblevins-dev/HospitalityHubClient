import { styled, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography, Paper } from "@mui/material"
import { NavLink } from "react-router-dom"
import "./Menu.css"
import { useTheme } from "@mui/material/styles"

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
        <Box bgcolor={'#181d1c'} color={'white'} sx={{ borderRight: '1px solid rgb(240, 240, 240)'}}>
            <Typography variant="h4" sx={{  paddingY: 4, bgcolor: '#434b50', paddingX: 1, color: 'white', fontFamily: 'fantasy', letterSpacing: '2px' }}>HospitalityHub</Typography>
            <Box sx={{ marginY: 5, padding: 2,}} elevation={0}>
                <Typography variant="h5">Michael Levito</Typography>
                <Typography variant="body2">Administrator</Typography>
            </Box>
            <Divider />
            <List >
                <ListItem disablePadding>
                    <MyNavLink to="/">
                        <ListItemButton>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </MyNavLink>
                </ListItem>
                <ListItem disablePadding>
                    <MyNavLink to="/reservations">
                        <ListItemButton>
                            <ListItemText primary="Reservations" />
                        </ListItemButton>
                    </MyNavLink>
                </ListItem>
                <ListItem disablePadding>
                    <MyNavLink to="/guests">
                        <ListItemButton>
                            <ListItemText primary="Guests" />
                        </ListItemButton>
                    </MyNavLink>
                </ListItem>
                <ListItem disablePadding>
                    <MyNavLink to="/rooms">
                        <ListItemButton>
                            <ListItemText primary="Rooms" />
                        </ListItemButton>
                    </MyNavLink>
                </ListItem>
            </List>
            <Divider />
        </Box>
    )
}

export default Menu