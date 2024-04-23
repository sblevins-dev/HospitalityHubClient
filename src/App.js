import './App.css';
import { Box, Container, Paper } from '@mui/material';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter className="App">
      <Container sx={{ lg: {minWidth: '1300px'}}}>
        <Box sx={{ height: '100vh', display: 'flex'}}>
          <Menu />
          <Main />
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
