import React, {useRef} from 'react';
import {useSelector} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Grid} from '@material-ui/core';

import MusicControls from 'components/minor/MusicControls';
import MusicProgressBar from 'components/minor/MusicProgressBar';
import VolumeSlider from 'components/minor/VolumeSlider';

import type StateStore from 'state/types';
import type StateApp from 'state/types/app';

const Player = () => {
  const classes = useStyles({});
  const {currentPlaylist} = useSelector<StateStore, StateApp>(state => state.app);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  let name = '';
  let artist = '';

  if (currentPlaylist[0]) {
    name = currentPlaylist[0].name;
    artist = currentPlaylist[0].artist;
  }

  return (
    <Grid
      container
      spacing={0}
      justify="space-between"
      alignItems="center"
      className={classes.container}
    >
      <Grid item container xs={2} justify="center" alignItems="center">
        <MusicControls audioPlayerRef={audioPlayerRef} />
      </Grid>

      <Grid item container xs={8} justify="center" alignItems="center">
        <MusicProgressBar
          artist={artist.trim().replace(/ /g, '_').toLowerCase()}
          musicName={name.trim().replace(/ /g, '_').toLowerCase()}
          audioPlayerRef={audioPlayerRef}
        />
      </Grid>

      <Grid item container xs={2} justify="center">
        <VolumeSlider audioPlayerRef={audioPlayerRef} />
      </Grid>
    </Grid>
  );
};

export default Player;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: `0px ${theme.spacing(3)}px`,
      height: '60px',
      width: '100%',
      maxWidth: 'none',
      margin: '0px',
      background: theme.palette.background.paper,
    },
  })
);