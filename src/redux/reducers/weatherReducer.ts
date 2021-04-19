import { IErrorTypes } from '../../types/appTypes';
import { IWeatherDataTypes, WeatherActionTypes } from '../../types/weatherTypes';

export interface IWeatherState {
    weatherData: IWeatherDataTypes,
    loading: boolean,
    error: IErrorTypes
}

const initialState: IWeatherState = {
    weatherData: {
        coord: {
            lon: 0,
            lat: 0
        },
        weather: [
            {
                id: 0,
                main: "",
                description: "",
                icon: "",
            }
        ],
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
        },
        visibility: 0,
        wind: {
            speed: 0,
            deg: 0,
        },
        clouds: {
            all: 0,
        },
        sys: {
            country: "",
            sunrise: 0,
            sunset: 0,
        },
        timezone: 0,
        id: 0,
        name: "",
        cod: 0
    },
    loading: false,
    error: {
        isError: false,
        errorMessage: null
    }
};

export const weatherReducer = (state = initialState, action: { type: WeatherActionTypes; payload: any }) => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER_REQUEST:
            console.log('FETCH_WEATHER_REQUEST');
            return {
                ...state,
                loading: true
            }
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                weatherData: action.payload.weather
            }
        case WeatherActionTypes.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    isError: true,
                    errorMessage: action.payload.err
                }
            }
        default:
            return state
    }
}