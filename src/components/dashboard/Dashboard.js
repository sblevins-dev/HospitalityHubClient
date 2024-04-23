import { Container, Box, Paper, Typography, Grid, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { ArrowForwardTwoTone } from "@mui/icons-material";
import RoomAlertCard from "../roomAlert/RoomAlertCard";

const StatItem = styled(Paper)(() => ({
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    flexDirection: "column",
    minHeight: '140px'
}));




const Dashboard = () => {
    return (
        <Container sx={{ width: "100%", minHeight: "100vh", display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '100px', flexWrap: 'wrap' }}>
            <Box sx={{ width: "100%", marginTop: "50px" }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>Monday Feb 3, 2023</Typography>
                <Box gap={2} sx={{ display: 'flex', minHeight: { xs: "600px", md: "600px", lg: "300px" }, height: "100%", width: "100%", flexWrap: { xs: "wrap", lg: "nowrap" }, justifyContent: "space-between"}}>
                    <div style={{ position: 'relative', overflow: 'hidden', minWidth: '500px', maxHeight: '300px', borderRadius: '5px' }}>
                        <div className="img-overlay" style={{ position: 'absolute', height: '100%', width: '100%', top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', objectFit: 'cover' }}>

                        </div>
                        <img src='https://th.bing.com/th/id/OIP.EZU1Bp42wz2-PAl3Ku9ZeQHaF3?rs=1&pid=ImgDetMain' style={{ objectFit: "cover", width: '100%', height: "100%", backgroundPosition: 'bottom' }} />
                    </div>

                    <Grid container rowSpacing={2} columnSpacing={2} width={"100%"} height={"100%"} sx={{ alignContent: "right", justifyContent: "center" }} >
                        <Grid item xs={6}>
                            <StatItem>
                                <Typography variant="h6">Occupied</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <Typography variant="h4">80</Typography>
                                    <Button  sx={{ color: '#143136', fontWeight: 'bold'}}>View All</Button>
                                </Box>
                            </StatItem>

                        </Grid>
                        <Grid item xs={6}>
                            <StatItem>
                                <Typography variant="h6">Available</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <Typography variant="h4">20</Typography>
                                    <Button  href="/rooms" sx={{ color: '#143136', fontWeight: 'bold'}}>View All</Button>
                                </Box>
                            </StatItem>
                        </Grid>
                        <Grid item xs={6}>
                            <StatItem>
                                <Typography variant="h6">Preparing</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <Typography variant="h4">12</Typography>
                                    <Button  sx={{ color: '#143136', fontWeight: 'bold'}}>View All</Button>
                                </Box>
                            </StatItem>
                        </Grid>
                        <Grid item xs={6}>

                            <StatItem>
                                <Typography variant="h6">Reserved</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <Typography variant="h4">2</Typography>
                                    <Button  href="/reservations" sx={{ color: '#143136', fontWeight: 'bold'}}>View All</Button>
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
                    <ArrowForwardTwoTone sx={{ fontSize: 30, color: '#143136', transition: 'all 0.3s ease-in-out', '&:hover': { bgcolor: '#143136', color: 'white'}, cursor: 'pointer', backgroundColor: 'white' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: "space-between", flexWrap: "wrap" }}>
                    <RoomAlertCard />
                    <RoomAlertCard />
                    <RoomAlertCard />
                </Box>
            </Box>
        </Container>
    )
}

export default Dashboard