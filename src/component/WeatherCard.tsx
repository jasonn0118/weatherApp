import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sunnyImage from '../images/sunny.jpg';
import { CardHeader, createStyles, FormGroup, Grid, Theme, withStyles } from '@material-ui/core';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import { CircularProgress } from '@material-ui/core';
import { useLocation, useParams } from 'react-router-dom';
import { IWeatherDataTypes } from '../types/weatherTypes';
import { fetchWeatherData } from '../config/apiKeys';
import { roundTemp } from '../utils/weatherFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../store/appStore';
import { fetchWeatherAPI, fetchWeatherRequest } from '../redux/actions/weatherActions';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        maxHeight: 450,
        minWidth: 345,
        textAlign: 'center'

    },
    media: {
        height: 200,
        objectFit: 'fill'
    },
    MuiCardActions: {
        justifyContent: "flex-end"
    }
});

const initialWeatherState: IWeatherDataTypes = {
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
};

const AntSwitch = withStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 28,
            height: 16,
            padding: 0,
            display: 'flex',
        },
        switchBase: {
            padding: 2,
            color: theme.palette.grey[500],
            '&$checked': {
                transform: 'translateX(12px)',
                color: theme.palette.common.white,
                '& + $track': {
                    opacity: 1,
                    backgroundColor: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                },
            },
        },
        thumb: {
            width: 12,
            height: 12,
            boxShadow: 'none',
        },
        track: {
            border: `1px solid ${theme.palette.grey[500]}`,
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: theme.palette.common.white,
        },
        checked: {},
    }),
)(Switch);

const WeatherCard: React.FC = (props: any) => {
    const { weather, error } = useSelector((store: AppStore) => ({
        weather: store.weather.weatherData,
        error: store.weather.error
    }));
    const { city } : any = useParams();
    const dispatch = useDispatch();


    // const classes = useStyles();
    // const [isFerh, setIsFerh] = useState(true);
    // const [currentCity, setCurrentCity] = useState(initialWeatherState);
    // const [isLoading, setIsLoading] = useState(true);
    // const { search } = useLocation();
    // const searchPrams = new URLSearchParams(search);
    // const searchString = searchPrams.get('search');
    // if(!searchString) {
    //     return <></>;
    // }

    useEffect(() => {
        dispatch(fetchWeatherAPI(city, "imperial"));
    }, [])

    // dispatch(fetchWeatherAPI("London", "imperial"));
    // useEffect(() => {
    //     getWeather();
    // }, [searchString, isFerh]);

    // const getWeather = async () => {
    //     try {
    //         if (isFerh) {
    //             var fetch_data = await fetchWeatherData(searchString, "imperial");
    //         } else {
    //             fetch_data = await fetchWeatherData(searchString, "metric");
    //         }
    //         const responseData = await fetch_data.json();
    //         setCurrentCity(responseData);
    //         setIsLoading(false);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    // const handleSwitchTrigger = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setIsFerh(event.target.checked);
    // };


    return (
        <div>
            {/* { isLoading ? (
                <CircularProgress />
            ) : currentCity && (
                <Card className={classes.root}>
                    <CardHeader
                        title="time"
                        action={
                            <FormGroup>
                                <Typography component="div">
                                    <Grid component="label" container alignItems="center" spacing={1}>
                                        <Grid item>Cel</Grid>
                                        <Grid item>
                                            <AntSwitch checked={isFerh} onChange={handleSwitchTrigger} name="tempCheck" />
                                        </Grid>
                                        <Grid item>Fra</Grid>
                                    </Grid>
                                </Typography>
                            </FormGroup>
                        } />
                    <CardMedia className={classes.media} image={sunnyImage} title="weather Image" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {currentCity.name}, {currentCity.sys.country}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Current Temp: {roundTemp(currentCity.main.temp)}&deg;<br />
                            Max Temp: {roundTemp(currentCity.main.temp_max)}&deg;<br />
                            Min Temp: {roundTemp(currentCity.main.temp_min)}&deg;<br />
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.MuiCardActions}>
                        <Button size="small" color="primary">
                            Detail...
                            </Button>
                        <Button size="small" color="secondary">
                            Delete
                            </Button>
                    </CardActions>
                </Card>
            )} */}
        </div>

    );
}

export default WeatherCard;