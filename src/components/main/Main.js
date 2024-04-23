import { Box } from "@mui/material"
import Dashboard from "../dashboard/Dashboard"
import { Routes, Route } from 'react-router-dom'
import Reservations from "../reservations/Reservations"
import Guests from "../guests/Guests"

const Main = () => {
  return (
    <Box sx={{ width: '100%', position: 'relative'}}>
        <Box sx={{ bgcolor: '#e2e9ea', height: '70%', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: '-1' }} />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/guests" element={<Guests />} />
          </Routes>
    </Box>
  )
}

export default Main