import { styled, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography, Paper } from "@mui/material"
import { NavLink } from "react-router-dom"
import "./Menu.css"

const MyNavLink = styled(NavLink)(() => ({
    textDecoration: 'none',
    color: 'black',
    width: '100%',
}))

const Menu = () => {
    return (
        <Box sx={{ minWidth: 250, backgroundColor: '#FAFAFA' }}>
            <Typography variant="h4" sx={{ paddingY: 4, paddingLeft: 1, bgcolor: '#4a595b', color: 'white' }}>HospitalityHub</Typography>
            <Paper sx={{ marginY: 5, padding: 2}} elevation={0}>
                <Typography variant="h6">Michael</Typography>
                <Typography>Administrator</Typography>
            </Paper>
            <List sx={{ marginTop: 10 }}>
                <ListItem disablePadding>
                    <MyNavLink to="/" activeClassName="active">
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
            </List>
            <Divider />
        </Box>
    )
}

export default Menu