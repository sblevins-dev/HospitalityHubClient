import { Container, Box, Paper, Typography, Grid, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { ArrowForwardTwoTone } from "@mui/icons-material";
import RoomAlertCard from "../roomAlert/RoomAlertCard";
import paris from "../../images/paris.jpg"
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/MyContext";

const StatItem = styled(Paper)(() => ({
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    flexDirection: "column",
    minHeight: '140px'
}));




const Dashboard = () => {

    const { currWeather, roomList } = useContext(MyContext);

    return (
        <Container sx={{ width: "100%", minHeight: "100vh", display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '100px', flexWrap: 'wrap' }}>
            <Box sx={{ width: "100%", marginTop: "50px" }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>Monday Feb 3, 2023</Typography>
                <Box gap={2} sx={{ display: 'flex', minHeight: { xs: "600px", md: "600px", lg: "300px" }, height: "100%", width: "100%", flexWrap: { xs: "wrap", lg: "nowrap" }, justifyContent: "space-between" }}>
                    <Paper style={{ position: 'relative', overflow: 'hidden', maxHeight: '400px', width: '100%' }}>
                        <div className="img-overlay" style={{ position: 'absolute', height: '100%', width: '100%', top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)', objectFit: 'cover' }}>

                        </div>
                        <img src={paris} style={{ objectFit: 'cover', width: '100%', height: "100%", objectPosition: 'bottom' }} />
                        <Box sx={{ position: 'absolute', top: 5, left: 5, zIndex: 1, color: 'white' }}>
                            <Typography variant="h4">Paris</Typography>
                            <Typography variant="h5">{currWeather !== null && currWeather.current.temperature_2m}&deg; F</Typography>
                        </Box>
                    </Paper>

                    <Grid container spacing={2} maxWidth={{xs: '100%', }} height={"100%"} sx={{ alignContent: "right", justifyContent: "center" }} >
                        <Grid item xs={6}>
                            <StatItem>
                                <Typography variant="h6">Occupied</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <Typography variant="h4">{roomList.filter(room => room.status == 'occupied').length}</Typography>
                                    <Button  sx={{ fontWeight: 'bold'}}>View All</Button>
                                </Box>
                            </StatItem>

                        </Grid>
                        <Grid item xs={6}>
                            <StatItem>
                                <Typography variant="h6">Available</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <Typography variant="h4">{roomList.filter(room => room.status == 'available').length}</Typography>
                                    <Button  href="/rooms" sx={{ fontWeight: 'bold'}}>View All</Button>
                                </Box>
                            </StatItem>
                        </Grid>
                        <Grid item xs={6}>
                            <StatItem>
                                <Typography variant="h6">Preparing</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <Typography variant="h4">{roomList.filter(room => room.status == 'preparing').length}</Typography>
                                    <Button  sx={{ fontWeight: 'bold'}}>View All</Button>
                                </Box>
                            </StatItem>
                        </Grid>
                        <Grid item xs={6}>

                            <StatItem>
                                <Typography variant="h6">Reserved</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <Typography variant="h4">{roomList.filter(room => room.status == 'reserved').length}</Typography>
                                    <Button  href="/reservations" sx={{ fontWeight: 'bold'}}>View All</Button>
                                </Box>
                            </StatItem>

                        </Grid>
                    </Grid>
                </Box>

            </Box>
            <Box width="100%">
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <Typography variant="h5" sx={{ width: "150px" }}>
                        Room Alerts

                    </Typography>
                    <ArrowForwardTwoTone sx={{ bgcolor: '#335dff', color: 'white', fontSize: 30, transition: 'all 0.3s ease-in-out', cursor: 'pointer' }} />
                </Box>
                <Box gap={2} sx={{ display: 'flex', justifyContent: "space-between", flexWrap: "wrap" }}>
                    <RoomAlertCard />
                    <RoomAlertCard />
                    <RoomAlertCard />
                </Box>
            </Box>
        </Container>
    )
}

export default Dashboard