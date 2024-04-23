import './App.css';
import { Box, Container, Paper } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  return (
      <BrowserRouter className="App">
        <CssBaseline />
        <Container sx={{ lg: { minWidth: '1300px' } }}>
          <Box sx={{ height: '100vh', display: 'flex' }}>
            <Menu />
            <Main />
          </Box>
        </Container>
      </BrowserRouter>

  );
}

export default App;
