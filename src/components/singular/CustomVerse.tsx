import React from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Typography} from '@material-ui/core';

interface PropsCustomLyrics {
  verse: string;
}

const CustomLyrics: React.FC<PropsCustomLyrics> = ({verse}) => {
  const classes = useStyles();

  return (
    <Typography className={classes.typography} variant="body1">
      {verse.trim()}
    </Typography>
  );
};

export default CustomLyrics;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {fontSize: '12pt'},
  })
);
