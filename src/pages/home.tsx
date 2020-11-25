import React from 'react';
import Head from 'next/head';

import {useSelector} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import HomeHeader from 'components/major/HomeHeader';
import HomePlaylistMenu from 'components/major/HomePlaylistMenu';
import HomeDisplay from 'components/major/HomeDisplay';
import HomePlayer from 'components/major/HomePlayer';

import type StateStore from 'state/types';
import type StateUser from 'state/types/user';

interface Props {}

const HomePage: React.FC<Props> = () => {
  const classes = useStyles({});
  const {playlists, errorMessage, name, id, profileImageUrl} = useSelector<StateStore, StateUser>(
    state => state.user
  );

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
          <HomeHeader name={name} profileImageUrl={profileImageUrl} id={id} />
        </Grid>

        <Grid item xs={3} className={classes.menu}>
          <HomePlaylistMenu title="playlists" playlists={playlists} errorMessage={errorMessage} />
        </Grid>

        <Grid item container xs={9} justify="space-between" className={classes.display}>
          <HomeDisplay />
        </Grid>

        <Grid item container xs={12} className={classes.player}>
          <HomePlayer />
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
