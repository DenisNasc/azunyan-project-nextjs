import React from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';
import {Container, Paper, Typography} from '@material-ui/core';

import CustomLyrics from 'components/atoms/CustomLyrics';

interface PropsDisplayLyrics {
  currentMusic: {artist: string; name: string; lyrics: string[]};
}

const DisplayLyrics: React.FC<PropsDisplayLyrics> = ({currentMusic: {name, artist, lyrics}}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} elevation={0}>
      <Container className={classes.header}>
        <Typography className={classes.name} variant="subtitle1">
          {name.toUpperCase()}
        </Typography>
        <Typography className={classes.artist} variant="subtitle2">
          {artist.toUpperCase()}
        </Typography>
      </Container>
      <Paper className={classes.paperLyrics}>
        <ul className={classes.ulLyrics}>
          {lyrics.map((e, i) => (
            <li key={`${e}-${i}`} className={classes.paragrafLyrics}>
              <CustomLyrics paragrafs={e} />
            </li>
          ))}
        </ul>
      </Paper>
    </Container>
  );
};

export default DisplayLyrics;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      margin: '0px',
      padding: `0px`,
      borderRadius: '0px',
      background: 'none',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '40px',
      width: '60%',
      padding: '0px',
      margin: '0px',
      marginTop: `${theme.spacing(3)}px`,
    },
    paperLyrics: {
      width: '80%',
      maxHeight: '800px',
      marginBottom: `${theme.spacing(3)}px`,
      overflowY: 'scroll',
      background: theme.palette.background.paper,
    },
    ulLyrics: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px',
      margin: '0px',
      width: '100%',
    },
    paragrafLyrics: {
      margin: '10px 0px',
      padding: '0px',
      width: '100%',
      textAlign: 'center',
    },
    name: {},
    artist: {},
    lyrics: {width: '100%', margin: '0px', padding: '0px'},
  })
);
