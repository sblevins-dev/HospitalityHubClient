import './App.css';
import { Box, Container, Paper } from '@mui/material';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Container sx={{ lg: {minWidth: '1300px'}}}>
        <Box sx={{ height: '100vh', display: 'flex'}}>
          <Menu />
          <Main />
        </Box>
      </Container>
    </div>
  );
}

export default App;
