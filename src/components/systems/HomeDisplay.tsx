import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Grid} from '@material-ui/core';

import createAxiosInstance from 'axios-config';

import DisplaySearch from 'components/molecules/DisplaySearch';
import DisplayLyrics from 'components/molecules/DisplayLyrics';

import type {StateAppReducer} from 'state/reducers/app/types';
import type {StateStore} from 'state/store/types';

const HomeDisplay: React.FC = () => {
  const classes = useStyles();
  const [musicsFromDB, setMusicsFromDB] = useState([]);

  const axios = createAxiosInstance();

  const {query, currentPlaylist} = useSelector<StateStore, StateAppReducer>(
    state => state.appReducer
  );

  useEffect(() => {
    const awaitAxios = async () => {
      const {data} = await axios.get(`/mongo/musics?artist=all`);
      setMusicsFromDB(data);
    };

    awaitAxios();
  }, []);

  return (
    <Grid container className={classes.container}>
      <Grid item container xs={5} className={classes.containerLeft}>
        <DisplaySearch query={query} musicsFromDB={musicsFromDB} />
      </Grid>
      <Grid
        item
        container
        xs={7}
        alignItems="center"
        justify="center"
        className={classes.containerRight}
      >
        <DisplayLyrics
          name={currentPlaylist[0] ? currentPlaylist[0].name : undefined}
          artist={currentPlaylist[0] ? currentPlaylist[0].artist : undefined}
          lyrics={currentPlaylist[0] ? currentPlaylist[0].lyrics : undefined}
        />
      </Grid>
    </Grid>
  );
};

export default HomeDisplay;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '100%',
      width: '100%',
    },
    containerLeft: {height: '100%', minWidth: '448px'},
    containerRight: {height: '100%', minWidth: '600px'},
  })
);
