import React, {useState, useEffect, useCallback} from 'react';

import {Theme, makeStyles, withStyles, createStyles} from '@material-ui/core/styles';

import {Container, LinearProgress, Typography} from '@material-ui/core';

interface Props {
  artist: string;
  musicName: string;
  audioPlayerRef: React.MutableRefObject<HTMLAudioElement>;
}

const StyledLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  })
)(LinearProgress);

const MusicProgressBar: React.FC<Props> = ({artist, musicName, audioPlayerRef}) => {
  const classes = useStyles();
  const [progressBarValue, setProgressBarValue] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioPlayerRef) return;
    audioPlayerRef.current.src = null;
    audioPlayerRef.current.src = `/api/musics?artist=${artist}&musicName=${musicName}`;
  }, [artist, musicName, audioPlayerRef]);

  useEffect(() => {
    if (!audioPlayerRef.current) return;

    audioPlayerRef.current.addEventListener(
      'timeupdate',
      () => {
        const {currentTime: currentTimeSc, duration: durationSc} = audioPlayerRef.current;

        const musicDuration = Number(Math.floor(durationSc).toFixed(0));
        const currentMusicTime = Number(Math.floor(currentTimeSc).toFixed(0));

        setCurrentTime(currentMusicTime);

        if (musicDuration) {
          setDuration(musicDuration);
          setProgressBarValue((currentMusicTime * 100) / musicDuration);
        }
      },
      false
    );
  }, [audioPlayerRef]);

  const formatTimer = useCallback((timer: number) => {
    const seconds = Math.floor(timer % 60);
    const minutes = Number(Math.floor(timer / 60).toFixed(0));

    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }, []);

  return (
    <Container className={classes.container}>
      <audio src={`/api/musics?artist=${artist}&musicName=${musicName}`} ref={audioPlayerRef} />

      <StyledLinearProgress
        color="primary"
        value={progressBarValue}
        className={classes.progressBar}
        variant="determinate"
      />

      <Container className={classes.timersContainer}>
        <Typography className={classes.timers}>{formatTimer(currentTime)}</Typography>
        <Typography className={classes.timers}>{formatTimer(duration)}</Typography>
      </Container>
    </Container>
  );
};

export default MusicProgressBar;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '40px',
      padding: '0px',
      background: 'none',
      borderRadius: '20px',
    },
    progressBar: {
      width: '100%',
    },
    timersContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0px',
      padding: '0px',
      height: '10px',
      width: '100%',
      paddingBottom: theme.spacing(3),
    },
    timers: {
      fontSize: '10pt',
    },
  })
);
