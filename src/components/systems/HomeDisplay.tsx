import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Grid} from '@material-ui/core';

import DisplaySearch from 'components/molecules/DisplaySearch';
import DisplayLyrics from 'components/molecules/DisplayLyrics';

import type {StateAppReducer} from 'state/reducers/app/types';
import type {StateStore} from 'state/store/types';

const HomeDisplay = () => {
  const classes = useStyles();
  const {query, musicsDB, currentMusic} = useSelector<StateStore, StateAppReducer>(
    state => state.appReducer
  );

  useEffect(() => {
    console.log('mudou');
  }, [query]);

  return (
    <Grid container className={classes.container}>
      <Grid item container xs={5} className={classes.containerLeft}>
        <DisplaySearch query={query} musicsDB={musicsDB} />
      </Grid>
      <Grid
        item
        container
        xs={7}
        alignItems="center"
        justify="center"
        className={classes.containerRight}
      >
        <DisplayLyrics currentMusic={currentMusic} />
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
