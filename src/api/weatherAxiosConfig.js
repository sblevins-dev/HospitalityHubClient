import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.open-meteo.com/v1/forecast',
    params: {
        "latitude": 48.8534,
        "longitude": 2.3488,
        "current": "temperature_2m",
        "temperature_unit": "fahrenheit"
    }
})