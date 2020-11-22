import React, {useRef, useEffect} from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Container} from '@material-ui/core';

interface PropsMusicProgressBar {
  artist: string;
  musicName: string;
}

const MusicProgressBar: React.FC<PropsMusicProgressBar> = ({artist, musicName}) => {
  const classes = useStyles();
  const audioPlayer = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioPlayer.current.src = null;
    audioPlayer.current.src = `/api/musics?artist=${artist}&musicName=${musicName}`;
    audioPlayer.current.play();
  }, [artist, musicName]);

  return (
    <Container className={classes.container}>
      <audio
        src={`/api/musics?artist=${artist}&musicName=${musicName}`}
        className={classes.progressBar}
        controls
        controlsList=""
        ref={audioPlayer}
      />
    </Container>
  );
};

export default MusicProgressBar;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      height: '40px',
      padding: '0px',
      background: 'none',
      borderRadius: '20px',
    },
    progressBar: {
      width: '100%',
      height: '100%',
      backgroundColor: 'none',
      border: '0px black solid',
      borderRadius: '20px',
      minHeight: '0px',
      margin: '0px',
      padding: '0px',
    },
  })
);
