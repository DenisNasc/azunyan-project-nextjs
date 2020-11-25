import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';
import {Container, List, ListItem, Typography} from '@material-ui/core';

import CustomVerse from 'components/singular/CustomVerse';

import {HANDLE_MUSIC_QUERY} from 'state/actions/app';

interface Props {
  name: string | undefined;
  artist: string | undefined;
  lyrics: string[][] | undefined;
}

const DisplayLyrics: React.FC<Props> = ({name = '', artist = '', lyrics = []}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const setQuery = useCallback(() => {
    const payload = {
      query: artist,
    };
    dispatch({type: HANDLE_MUSIC_QUERY, payload});
  }, [dispatch, artist]);

  return (
    <Container className={classes.container}>
      <Container className={classes.header}>
        <Typography className={classes.typographyName} variant="h5">
          {name.toUpperCase()}
        </Typography>
        <Typography className={classes.typographyArtist} variant="h5" onClick={setQuery}>
          {artist.toUpperCase()}
        </Typography>
      </Container>

      <List className={classes.listLyrics}>
        {lyrics.map(paragraf => (
          <ListItem key={(Math.random() * 10000).toFixed(0)} className={classes.listItemLyrics}>
            {paragraf.map(verse => (
              <CustomVerse key={(Math.random() * 10000).toFixed(0)} verse={verse} />
            ))}
          </ListItem>
        ))}
      </List>
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
      width: '80%',
      padding: '0px',
      margin: '0px',
      marginTop: `${theme.spacing(3)}px`,
    },
    listLyrics: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px',
      margin: '0px',
      width: '80%',
      maxHeight: '800px',
      overflowY: 'auto',
      background: theme.palette.background.paper,
      marginBottom: `${theme.spacing(3)}px`,
    },
    listItemLyrics: {
      display: 'flex',
      flexDirection: 'column',
      margin: '10px 0px',
      padding: '0px',
      width: '100%',
      textAlign: 'center',
    },
    typographyName: {},
    typographyArtist: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
    lyrics: {width: '100%', margin: '0px', padding: '0px'},
  })
);
