import React, {useState} from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {
  Pause as IconPause,
  PlayArrow as IconPlayArrow,
  SkipPrevious as IconSkipPrevious,
  SkipNext as IconSkipNext,
} from '@material-ui/icons';

import {IconButton} from '@material-ui/core';

interface Props {
  audioPlayerRef: React.MutableRefObject<HTMLAudioElement>;
}

const MusicControls: React.FC<Props> = ({audioPlayerRef}) => {
  const classes = useStyles();

  const [isPaused, setIsPaused] = useState(true);

  const pauseAndPlayMusic = () => {
    if (!audioPlayerRef.current || !audioPlayerRef.current.src.split('musicName=')[1]) return;

    if (audioPlayerRef.current.paused) {
      audioPlayerRef.current.play();
      setIsPaused(false);
    } else {
      audioPlayerRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <>
      <IconButton>
        <IconSkipPrevious />
      </IconButton>
      <IconButton onClick={pauseAndPlayMusic}>
        {isPaused ? <IconPlayArrow /> : <IconPause />}
      </IconButton>
      <IconButton>
        <IconSkipNext />
      </IconButton>
    </>
  );
};

export default MusicControls;

const useStyles = makeStyles((theme: Theme) => createStyles({}));
