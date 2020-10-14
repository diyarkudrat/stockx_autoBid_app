import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
        textAlign: 'center',
    },
    title: {
      flexGrow: 1,
    },
}));

export default function Appbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        AutoBidSX
                    </Typography>
                    <Button color="inherit">Log In</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}