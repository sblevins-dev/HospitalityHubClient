import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Menu = () => {
    return (
        <Box sx={{ minWidth: 250 }}>
            <Typography variant="h4" sx={{ paddingY: 4, paddingLeft: 1, bgcolor: '#2E5361', color: 'white' }}>HospitalityHub</Typography>
            <List sx={{ marginTop: 10 }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Reservations" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Guests" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    )
}

export default Menu