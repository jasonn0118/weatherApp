import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sunnyImage from '../images/sunny.jpg';

console.log(sunnyImage, '>>>>>>IMAGE');

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

const WeatherCard = (props: any) => {

    const calcCelsTemp = (temp: number) => {
        var target_celsius = Math.floor(temp - 273.15);
        return target_celsius;
    }

    const classes = useStyles();
    console.log(props.currentCity)
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={sunnyImage} title="weather Image" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.currentCity.name}, {props.currentCity.sys.country}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Current Temp: {calcCelsTemp(props.currentCity.main.temp)}&deg;<br />
                        Max Temp: {calcCelsTemp(props.currentCity.main.temp_max)}&deg;<br />
                        Min Temp: {calcCelsTemp(props.currentCity.main.temp_min)}&deg;<br />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.MuiCardActions}>
                <Button size="small" color="primary">
                    Detail...
                </Button>
                <Button size="small" color="secondary">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default WeatherCard;