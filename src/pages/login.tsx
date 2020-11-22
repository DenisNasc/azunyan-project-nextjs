import React from 'react';
import Head from 'next/head';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Grid, Paper, Typography} from '@material-ui/core';

import Link from 'components/Link';

import SignUp from 'components/systems/SignUp';
import Login from 'components/systems/Login';

import {useSelector} from 'react-redux';

import type {StateStore} from 'state/store/types';
import type {StateAppReducer} from 'state/reducers/app/types';

const LoginPage = () => {
  const classes = useStyles({});
  const {user} = useSelector<StateStore, StateAppReducer>(state => state.appReducer);

  console.log(user);

  return (
    <>
      <Head>
        <title>Azunyan Project - Login</title>
      </Head>

      <Paper className={classes.root} elevation={0}>
        <Grid container direction="column" alignItems="center" className={classes.titles}>
          <Typography variant="h4" gutterBottom>
            Azunyan Project
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Listen all musics without pay for it
          </Typography>
        </Grid>

        <Grid container direction="column" alignItems="center" className={classes.content}>
          <SignUp />

          <Login />

          <Typography className={classes.loginWithoutAcount}>
            <Link style={{color: 'black'}} href="/home">
              Login without a account
            </Link>
          </Typography>
        </Grid>
      </Paper>
    </>
  );
};

export default LoginPage;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '100vh',
    },
    titles: {
      background: '#736598',
      color: 'white',
      position: 'relative',
      top: '0px',
      zIndex: 10,
      padding: '10px 0px',
    },
    content: {
      height: '100%',
    },
    loginWithoutAcount: {
      marginTop: '20px',
      width: '100%',
      maxWidth: '400px',
      opacity: 0.5,
    },
  })
);
