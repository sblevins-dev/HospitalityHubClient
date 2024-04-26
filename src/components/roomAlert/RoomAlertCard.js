import { styled, Box, Paper, Button } from "@mui/material";
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import CleaningServicesTwoToneIcon from '@mui/icons-material/CleaningServicesTwoTone';
import LocalLaundryServiceTwoToneIcon from '@mui/icons-material/LocalLaundryServiceTwoTone';

const RoomAlertItem = styled(Paper)(() => ({
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    flexDirection: "column",
    minHeight: "200px",
    minWidth: "270px",
    backgroundColor: "#FCFCFC",
}));

const RoomAlertItemDiv = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
}))

const RoomAlertCard = ({alert}) => {

    let icon = alert.issue == "Locked Door" ? 
        <LockTwoToneIcon  /> 
        :
        alert.issue == "Laundry" ?
        <LocalLaundryServiceTwoToneIcon />
        :
        <CleaningServicesTwoToneIcon />

    return (
        <>
            <RoomAlertItem sx={{ width: {xs: '100%', lg: '270px'}}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{icon}</span>
                    <h4>{alert.issue}</h4>
                    <Button variant="contained" sx={{ transition: 'all 0.3s ease-in-out', fontWeight: 'bold'}}>Actions</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', rowGap: "10px" }}>
                    <RoomAlertItemDiv>
                        <span style={{ fontWeight: 'bold'}}>Room</span>
                        <span>{alert.room}</span>
                    </RoomAlertItemDiv>
                    <RoomAlertItemDiv>
                        <span style={{ fontWeight: 'bold'}}>Status</span>
                        <span>{alert.status}</span>
                    </RoomAlertItemDiv>
                    <RoomAlertItemDiv>
                        <span style={{ fontWeight: 'bold'}}>Assignee</span>
                        <span>{alert.assignee}</span>
                    </RoomAlertItemDiv>

                </Box>
            </RoomAlertItem>
        </>

    )
}

export default RoomAlertCard