import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './component/NavBar';
import WeatherCard from './component/WeatherCard';
import WeatherDetail from './component/WeatherDetail';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    grow: {
      flexGrow: 1,
    },
    container: {
      display: "flex",
      height: '100vh',
      justifyContent: "center",
      alignItems: "center"
    },
    mainCard: {
      
    }
  }),
);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <NavBar />
      <div className={classes.container}>
        <Switch>
          <Route exact path="/weather" component={WeatherCard} />
        </Switch>
      </div>
      
    </div>
  );
}
