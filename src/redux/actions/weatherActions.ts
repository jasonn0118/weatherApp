import { fetchWeatherData } from "../../config/apiKeys";
import { IWeatherDataTypes, WeatherActionTypes } from "../../types/weatherTypes";

export const fetchWeatherRequest = () => ({
    type: WeatherActionTypes.FETCH_WEATHER_REQUEST
});

export const fetchWeatherSuccess = (weather: IWeatherDataTypes) => ({
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
    payload: weather
});

export const fetchWeatherFailure = (err: any) => ({
    type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
    payload: err
})

export const fetchWeatherAPI = (city: string | null, unit: string) => {
    return (dispatch: any) => {
        dispatch(fetchWeatherRequest());
        Promise.all([fetchWeatherData(city, unit)])
            .then(res => {
                return Promise.all([res[0].json()]);
            }).then(res => {
                console.log(res, '>>>>>>>res HERE')
                dispatch(fetchWeatherSuccess(res[0]))
            }).catch(err => {
                console.log(err, '>>>>>>>err HERE')
                dispatch(fetchWeatherFailure(err));
            })
    }
}