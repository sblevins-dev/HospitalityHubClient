import './App.css';
import { Box, Container, Paper } from '@mui/material';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  return (
      <BrowserRouter >
        <Container className="App" sx={{ lg: { minWidth: '1300px' }, padding: 0}}>
          <Box sx={{ height: '100vh', display: 'flex', bgcolor: 'rgb(250, 250, 250)' }}>
            <Menu />
            <Main />
          </Box>
        </Container>
      </BrowserRouter>

  );
}

export default App;
