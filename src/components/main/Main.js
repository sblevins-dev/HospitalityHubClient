import { Box } from "@mui/material"
import Dashboard from "../dashboard/Dashboard"
import { Routes, Route } from 'react-router-dom'
import Reservations from "../reservations/Reservations"
import Guests from "../guests/Guests"
import Rooms from "../rooms/Rooms"

const Main = () => {
  return (
    <Box className="main-container" sx={{ width: '100%', overflowY: 'scroll'}}>
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