import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Grid, Container, CircularProgress, Paper, InputBase, IconButton} from '@material-ui/core';
import {Search as IconSearch} from '@material-ui/icons';

import createAxiosInstance from 'axios-config';

import DisplaySearch from 'components/minor/DisplaySearch';
import DisplayLyrics from 'components/minor/DisplayLyrics';

import type StateStore from 'state/types';
import type StateApp from 'state/types/app';
import {PayloadApp} from 'state/reducers/app/types';

import {
  APP_HANDLE_ERROR_MESSAGE,
  APP_STATE_CONTROLLER_FAIL,
  APP_STATE_CONTROLLER_START,
  APP_STATE_CONTROLLER_SUCCESS,
  HANDLE_MUSIC_QUERY,
} from 'state/actions/app';

const HomeDisplay: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [artists, setArtists] = useState([]);

  const {
    query,
    currentPlaylist,
    stateController: {start},
  } = useSelector<StateStore, StateApp>(state => state.app);

  useEffect(() => {
    const axios = createAxiosInstance();

    const awaitAxios = async () => {
      try {
        dispatch({type: APP_STATE_CONTROLLER_START});
        const {data} = await axios.get(`/mongo/musics?artist=all`);

        setArtists(data);

        dispatch({type: APP_STATE_CONTROLLER_SUCCESS});
      } catch (error) {
        const payload: PayloadApp = {errorMessage: error.message};

        dispatch({type: APP_STATE_CONTROLLER_FAIL});
        dispatch({type: APP_HANDLE_ERROR_MESSAGE, payload});
      }
    };

    awaitAxios();
  }, [dispatch]);

  const [musicQuery, setMusicQuery] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setMusicQuery(event.target.value),
    []
  );

  const searchArtist = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      event.preventDefault();
      const payload: PayloadApp = {query: musicQuery};
      dispatch({type: HANDLE_MUSIC_QUERY, payload});
    },
    [dispatch, musicQuery]
  );

  return (
    <>
      <Grid item container xs={5} className={classes.containerLeft}>
        <Paper className={classes.paper} component="form" onSubmit={searchArtist}>
          <InputBase
            className={classes.input}
            value={musicQuery}
            onChange={handleChange}
            placeholder="Search Music..."
            inputProps={{'aria-label': 'search music'}}
          />
          <IconButton type="submit" aria-label="search">
            <IconSearch />
          </IconButton>
        </Paper>
        <Container className={classes.container}>
          {start ? <CircularProgress /> : <DisplaySearch query={query} artists={artists} />}
        </Container>
      </Grid>

      <Grid
        item
        container
        xs={7}
        alignItems="center"
        justify="center"
        className={classes.containerRight}
      >
        <DisplayLyrics
          name={currentPlaylist[0] ? currentPlaylist[0].name : undefined}
          artist={currentPlaylist[0] ? currentPlaylist[0].artist : undefined}
          lyrics={currentPlaylist[0] ? currentPlaylist[0].lyrics : undefined}
        />
      </Grid>
    </>
  );
};

export default HomeDisplay;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: `0px ${theme.spacing(3)}`,
      margin: '0px',
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100%',
      maxHeight: '700px',
      width: '100%',
      overflowY: 'auto',
    },
    containerLeft: {
      padding: `${theme.spacing(3)}px 0px`,
      height: '100%',
      minWidth: '448px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    paper: {
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      width: '80%',
    },
    containerRight: {height: '100%', minWidth: '600px'},
  })
);
