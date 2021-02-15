import React, {useState} from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppBar, Badge, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Notifications, Search } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

const NavBar = () => {

  const classes = useStyles();
  const [searchString, setSeachString] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeachString(event.target.value);
  }           

  return (
    <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
              <Typography variant="h5" className={classes.title}>
                  Weather App
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search />
                </div>
                {/* This is feature that search weather by location */}
                <InputBase
                  placeholder="Search..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{'aria-label':'search'}}
                  onChange={handleInputChange}
                />
              </div>
              <div className={classes.grow} />
              <div className="">
                  <IconButton color="inherit">
                    <Badge badgeContent={3} color="secondary">
                      <Notifications />
                    </Badge>
                  </IconButton>
              </div>
          </Toolbar>
        </AppBar>
    </div>
  );
};

export default NavBar;
