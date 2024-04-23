import { Box } from "@mui/material"
import Dashboard from "../dashboard/Dashboard"

const Main = () => {
  return (
    <Box sx={{ width: '100%', position: 'relative'}}>
        <Box sx={{ bgcolor: '#E9F1FE', height: '70%', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: '-1' }} />
        <Dashboard />
    </Box>
  )
}

export default Main