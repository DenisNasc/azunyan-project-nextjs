import React from 'react';
import Head from 'next/head';

import {useSelector} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import Player from 'components/systems/Player';
import HomeHeader from 'components/molecules/HomeHeader';
import HomeLateralMenu from 'components/molecules/HomeLateralMenu';
import HomeDisplay from 'components/systems/HomeDisplay';

import type {StateAppReducer} from 'state/reducers/app/types';
import type {StateStore} from 'state/store/types';

interface PropsHomePage {}

const user = {
  id: '0123456789',
  name: 'Denis Nascimento',
  imageUrl:
    'https://images.pexels.com/photos/4505279/pexels-photo-4505279.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  email: 'devdenisbr@gmail.com',
};

const HomePage: React.FC<PropsHomePage> = () => {
  const classes = useStyles({});
  const {
    user: {playlists},
  } = useSelector<StateStore, StateAppReducer>(state => state.appReducer);

  return (
    <>
      <Head>
        <title>Azunyan Project - Home</title>
      </Head>
      <Grid
        container
        spacing={0}
        justify="space-between"
        alignItems="stretch"
        className={classes.container}
      >
        <Grid item xs={12} className={classes.header}>
          <HomeHeader user={user} />
        </Grid>

        <Grid item xs={2} className={classes.menu}>
          <HomeLateralMenu title="playlists" playlists={playlists} />
        </Grid>

        <Grid item xs={10} className={classes.display}>
          <HomeDisplay />
        </Grid>

        <Grid item container xs={12} className={classes.player}>
          <Player />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      height: '100vh',
      maxWidth: 'none',
      margin: '0px',
      padding: '0px',
    },
    header: {
      background: theme.palette.background.paper,
      height: '60px',
    },
    menu: {
      background: theme.palette.background.paper,
      height: 'calc(100vh - 60px - 60px)',
    },
    display: {
      background: theme.palette.background.default,
      height: 'calc(100vh - 60px - 60px)',
    },
    player: {
      width: '100%',
      height: '60px',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
  })
);
