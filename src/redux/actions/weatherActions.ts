import { IWeatherDataTypes, WeatherActionTypes } from "../../types/weatherTypes";

export const fetchWeatherRequest = () => ({
    type: WeatherActionTypes.FETCH_WEATHER_REQUEST
});

export const fetchWeatherSuccess = (weather: IWeatherDataTypes) => ({
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
    payload: weather
});


export const fetchWeatherAPI = (city: string | null, unit: string) => {
    const result = await dispatch({
        type:
    })
}