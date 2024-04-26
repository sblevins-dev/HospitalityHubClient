import './App.css';
import { Box, Container, Paper } from '@mui/material';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MyContext } from './context/MyContext';
import { useEffect, useState } from 'react';
import weatherApi from "./api/weatherAxiosConfig"


function App() {

  const [currWeather, setCurrWeather] = useState(null);
  const [roomList, setRoomList] = useState([]);
  const [guestList, setGuestList] = useState([]);
  const [roomAlertList, setRoomAlertList] = useState([]);

    const getCurrentWeather = async () => {
        const resp = await weatherApi.get();
        setCurrWeather(resp.data)
    }

    useEffect(() => {
        if (currWeather == null) getCurrentWeather();
    }, [])

  return (
    <BrowserRouter >
      <Container className="App" sx={{ lg: { minWidth: '1300px' }, padding: 0 }}>
        <MyContext.Provider value={{ currWeather, roomList, setRoomList, 
          guestList, setGuestList, roomAlertList, setRoomAlertList }}>
          <Box sx={{ height: '100vh', display: 'flex', bgcolor: 'rgb(250, 250, 250)' }}>
            <Menu />
            <Main />
          </Box>
        </MyContext.Provider>
      </Container>
    </BrowserRouter>

  );
}

export default App;
