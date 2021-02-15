import React, { useEffect } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './component/NavBar';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    grow: {
      flexGrow: 1,
    }
  }),
);

export default function App() {
  const classes = useStyles();
  const exampleAPI = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try{
      const fetch_data = await fetch(exampleAPI);
      const responseData = await fetch_data.json();
      console.log(responseData, "\n>>>>> deployed");
    } catch(error) {
      console.log(error)
    }
    
  };

  return (
    <div className={classes.grow}>
      <NavBar />
      <div className="main-content">
        This is Main display
      </div>
    </div>
  );
}
