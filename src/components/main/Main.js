import { Box } from "@mui/material"
import Dashboard from "../dashboard/Dashboard"
import { Routes, Route } from 'react-router-dom'
import Reservations from "../reservations/Reservations"
import Guests from "../guests/Guests"
import Rooms from "../rooms/Rooms"

const Main = () => {
  return (
    <Box className="main-container" sx={{ width: '100%', position: 'relative', overflowY: 'scroll'}}>
        <Box sx={{ bgcolor: '#eaf5f8', height: '70%', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: '-1' }} />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/guests" element={<Guests />} />
            <Route path="/rooms" element={<Rooms />} />
          </Routes>
    </Box>
  )
}

export default Main