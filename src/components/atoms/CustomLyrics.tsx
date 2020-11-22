import React from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Typography} from '@material-ui/core';

interface PropsCustomLyrics {
  paragrafs: string;
}

const CustomLyrics: React.FC<PropsCustomLyrics> = ({paragrafs}) => {
  const classes = useStyles();

  return (
    <ul className={classes.ul}>
      {paragrafs.split('\n').map((verse, i) => (
        <li className={classes.li} key={`${verse}+${i}`}>
          <Typography className={classes.typography} variant="body1">
            {verse.trim()}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default CustomLyrics;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    li: {margin: '0px', padding: '0px'},
    ul: {listStyle: 'none', margin: '0px', padding: '0px'},
    typography: {fontSize: '12pt'},
  })
);
