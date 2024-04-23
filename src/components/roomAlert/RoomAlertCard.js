import { styled, Box, Paper, Button } from "@mui/material";

const RoomAlertItem = styled(Paper)(() => ({
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    flexDirection: "column",
    minHeight: "200px",
    minWidth: "270px",
    backgroundColor: "#FCFCFC"
}));

const RoomAlertItemDiv = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
}))

const RoomAlertCard = () => {
    return (
        <>
            <RoomAlertItem>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Icon</span>
                    <h4>Locked Door</h4>
                    <Button>Actions</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', rowGap: "10px" }}>
                    <RoomAlertItemDiv>
                        <span>#123456</span>
                        <span>Room 202</span>
                    </RoomAlertItemDiv>
                    <RoomAlertItemDiv>
                        <span>Status</span>
                        <span>In Progress</span>
                    </RoomAlertItemDiv>
                    <RoomAlertItemDiv>
                        <span>Assignee</span>
                        <span>Gerald Benton</span>
                    </RoomAlertItemDiv>

                </Box>
            </RoomAlertItem>
        </>

    )
}

export default RoomAlertCard