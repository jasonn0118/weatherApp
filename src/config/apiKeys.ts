const baseWeatherUrl = `https://api.openweathermap.org/data/2.5`;

export const fetchWeatherData = (passingString: string | null, unit: string) => {
    let  requestUrl = `${baseWeatherUrl}/weather?q=${passingString}&units=${unit}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    return fetch(requestUrl);
}