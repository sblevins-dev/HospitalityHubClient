import { styled, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const MyNavLink = styled(NavLink)(() => ({
    textDecoration: 'none',
    color: 'black'
}))

const Menu = () => {
    return (
        <Box sx={{ minWidth: 250 }}>
            <Typography variant="h4" sx={{ paddingY: 4, paddingLeft: 1, bgcolor: '#2E5361', color: 'white' }}>HospitalityHub</Typography>
            <List sx={{ marginTop: 10 }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <MyNavLink to="/">
                            <ListItemText primary="Dashboard" />
                        </MyNavLink>
                        
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <MyNavLink to="/reservations">
                            <ListItemText primary="Reservations" />
                        </MyNavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <MyNavLink to="/guests">
                            <ListItemText primary="Guests" />
                        </MyNavLink>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    )
}

export default Menu