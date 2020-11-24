import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Search as IconSearch} from '@material-ui/icons';
import {Paper, IconButton, InputBase} from '@material-ui/core';
import {HANDLE_MUSIC_QUERY} from 'state/actions/app';

const CustomSearchMusic = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [musicQuery, setMusicQuery] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setMusicQuery(event.target.value),
    []
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      event.preventDefault();
      const payload = {query: musicQuery};

      dispatch({type: HANDLE_MUSIC_QUERY, payload});
    },
    [musicQuery, dispatch]
  );

  return (
    <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
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
  );
};

export default CustomSearchMusic;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '400px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      width: '80%',
    },
  })
);
