import React, { useState } from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

import {
  VolumeDown as IconVolumeDown,
  VolumeUp as IconVolumeUp,
} from "@material-ui/icons";

import { Slider } from "@material-ui/core";

const VolumeSlider = () => {
  const classes = useStyles({});

  const [sliderValue, setSliderValue] = useState(100);

  const handleSliderValue = (event: any, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  return (
    <div className={classes.containerVolumeBar}>
      <IconVolumeDown />
      <Slider
        className={classes.volumeBar}
        value={sliderValue}
        onChange={handleSliderValue}
        aria-labelledby="continuous-slider"
      />
      <IconVolumeUp />
    </div>
  );
};

export default VolumeSlider;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerVolumeBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "220px",
    },
    volumeBar: {
      margin: "0px 10px",
      color: "black",
    },
  })
);
