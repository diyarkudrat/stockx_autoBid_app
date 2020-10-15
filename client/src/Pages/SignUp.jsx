import React, { useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '350px',
        height: '575px',
        border: '3px solid #32CF7A',
        borderRadius: '30px',
    },
    avatar: {
        backgroundColor: '#32CF7A',
        marginTop: '5%',
        width: '50px',
        height: '50px',
    },
    form: {
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        marginLeft: '10%',
        width: '80%',
    },
    box: {
        marginLeft: '10%',
        width: '80%',
    }
}));



export default function SignUp() {
    const classes = useStyles();


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonOutlineIcon style={{ width: '40px', height: '50px' }}/>
                </Avatar>
                <Typography component="h1" variant="h5" style={{ marginTop: '10%' }}>
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoFocus
                      className={classes.box}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoFocus
                      className={classes.box}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      className={classes.box}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      className={classes.box}
                    />
                    <Link href="#" style={{ marginLeft: '10%' }}>
                        Forgot password?
                    </Link>
                    <Button
                      type="submit"
                      variant="contained"
                      color="#C4C4C4"
                      className={classes.submit}
                    >
                        Log In
                    </Button>
                </form>
            </div>
        </Container>
    )
}