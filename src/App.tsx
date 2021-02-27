import React, { useEffect, useState } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './component/NavBar';
import WeatherCard from './component/WeatherCard';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    grow: {
      flexGrow: 1,
    },
    mainCard: {
      display: "flex",
      height: '100vh',
      justifyContent: "center",
      alignItems: "center"
    }
  }),
);

export default function App() {
  const classes = useStyles();
  const exampleAPI = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_API_KEY}`;
  const [currentCity, setCurrentCity] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try{
      const fetch_data = await fetch(exampleAPI);
      const responseData = await fetch_data.json();
      console.log(responseData, "\n>>>>> deployed");
      setCurrentCity(responseData);
      setIsLoading(false);
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <div className={classes.grow}>
      <NavBar />
      <div className={classes.mainCard}>
        {isLoading &&  <CircularProgress />}
        {!isLoading && <WeatherCard currentCity={currentCity}/>}
      </div>
    </div>
  );
}
