import React from "react";

import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

import {
  Pause as IconPause,
  SkipPrevious as IconSkipPrevious,
  SkipNext as IconSkipNext,
} from "@material-ui/icons";

import { IconButton } from "@material-ui/core";

const MusicControls = () => {
  const classes = useStyles({});
  return (
    <>
      <IconButton>
        <IconSkipPrevious />
      </IconButton>
      <IconButton>
        <IconPause />
      </IconButton>
      <IconButton>
        <IconSkipNext />
      </IconButton>
    </>
  );
};

export default MusicControls;

const useStyles = makeStyles((theme: Theme) => createStyles({}));
