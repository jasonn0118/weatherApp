import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './component/NavBar';
import Weather from './component/Weather';
import WeatherCard from './component/WeatherCard';
import WeatherDetail from './component/WeatherDetail';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      display: "flex",
      height: '100vh',
      justifyContent: "center",
      alignItems: "center"
    }
  }),
);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Switch>
        <Route path="/weather/:city">
          <div className={classes.container}>
            <Weather />
          </div>
        </Route>
      </Switch>

    </div>
  );
}
