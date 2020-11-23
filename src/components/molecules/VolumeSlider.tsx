import React, {useState, useEffect} from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {VolumeDown as IconVolumeDown, VolumeUp as IconVolumeUp} from '@material-ui/icons';

import {IconButton, Slider} from '@material-ui/core';

interface Props {
  audioPlayerRef: React.MutableRefObject<HTMLAudioElement>;
}

const VolumeSlider: React.FC<Props> = ({audioPlayerRef}) => {
  const classes = useStyles({});

  const [sliderValue, setSliderValue] = useState(100);

  useEffect(() => {
    if (!audioPlayerRef.current) return;
    audioPlayerRef.current.volume = sliderValue / 100;
  }, [audioPlayerRef, sliderValue]);

  const handleSliderValue = (_event: any, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  return (
    <div className={classes.containerVolumeBar}>
      <IconButton onClick={() => setSliderValue(0)}>
        <IconVolumeDown />
      </IconButton>
      <Slider
        className={classes.volumeBar}
        value={sliderValue}
        onChange={handleSliderValue}
        aria-labelledby="continuous-slider"
      />
      <IconButton onClick={() => setSliderValue(100)}>
        <IconVolumeUp />
      </IconButton>
    </div>
  );
};

export default VolumeSlider;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerVolumeBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '220px',
    },
    volumeBar: {
      margin: '0px 10px',
      color: theme.palette.getContrastText(theme.palette.background.paper),
    },
  })
);
