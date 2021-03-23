import React from 'react';
import { IWeatherDataTypes } from '../types/weatherTypes';

const WeatherDetail = (props: IWeatherDataTypes) => {
    console.log(props);
    return (
        <div>
            detail page
        </div>
    );
}

export default WeatherDetail;