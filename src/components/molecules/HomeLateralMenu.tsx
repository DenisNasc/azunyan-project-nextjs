import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Typography, List, ListItem, Container, IconButton, TextField} from '@material-ui/core';
import {
  Add as IconAdd,
  Done as IconDone,
  CancelOutlined as IconCancelOutlined,
} from '@material-ui/icons';
import {Alert} from '@material-ui/lab';

import CustomListItem from 'components/atoms/CustomListItem';
import {ADD_PLAYLIST, HANDLE_ERROR_MESSAGE} from 'state/actions/user';

import {TypePlaylist} from 'state/reducers/user/types';

interface PropsHomeLateralMenu {
  playlists: TypePlaylist[];
  errorMessage: string;
  title: string;
}

const HomeLateralMenu: React.FC<PropsHomeLateralMenu> = ({playlists, title, errorMessage}) => {
  const classes = useStyles({});
  const dispatch = useDispatch();

  const [textFieldOpen, setTextFieldOpen] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState('');

  const addPlaylist = () => {
    if (!textFieldValue) return;

    const payload = {
      newPlaylist: {name: textFieldValue},
    };
    dispatch({type: ADD_PLAYLIST, payload});

    setTextFieldValue('');
  };

  const openTextField = () => {
    setTextFieldOpen(true);
  };

  const closeTextField = () => {
    setTextFieldOpen(false);
    setTextFieldValue('');
  };

  const closeAlert = () => {
    const payload = {
      erroMessage: '',
    };
    dispatch({type: HANDLE_ERROR_MESSAGE, payload});
  };

  const handleTextField = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
  };

  return (
    <>
      <Container className={classes.header}>
        <Typography className={classes.title}>{title.toUpperCase()}</Typography>

        <IconButton disabled={textFieldOpen} className={classes.addButton} onClick={openTextField}>
          <IconAdd />
        </IconButton>
      </Container>

      {textFieldOpen && (
        <Container className={classes.containerAddPlaylist}>
          <TextField
            className={classes.textField}
            placeholder="Playlist name..."
            variant="outlined"
            value={textFieldValue}
            onChange={handleTextField}
          />

          <IconButton className={classes.iconDone} onClick={addPlaylist}>
            <IconDone />
          </IconButton>

          <IconButton className={classes.iconClose} onClick={closeTextField}>
            <IconCancelOutlined />
          </IconButton>
        </Container>
      )}
      {errorMessage && (
        <Alert className={classes.alert} variant="outlined" severity="error" onClose={closeAlert}>
          {errorMessage}
        </Alert>
      )}

      <List className={classes.list}>
        {playlists.map(({name, musics}) => (
          <ListItem key={name} className={classes.listItem}>
            <CustomListItem key={name} playlistName={name.toUpperCase()} musics={musics} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default HomeLateralMenu;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      margin: '0px',
      padding: `0px ${theme.spacing(3)}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      textAlign: 'center',
      padding: `${theme.spacing(3)}px 0px`,
      fontWeight: 'bold',
    },
    alert: {
      marginTop: theme.spacing(3),
    },
    containerAddPlaylist: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `0px ${theme.spacing(3)}px`,
      margin: '0px',
    },
    iconDone: {
      margin: '0px',
      padding: '0px',
      height: '24px',
      width: '24px',
      color: theme.palette.success.main,
    },
    iconClose: {
      margin: '0px',
      padding: '0px',
      height: '24px',
      width: '24px',
      color: theme.palette.error.main,
    },
    textField: {
      padding: `0px`,
      margin: '0px',
    },
    addButton: {
      height: '24px',
      width: '24px',
    },
    list: {padding: `${theme.spacing(3)}px`},
    listItem: {
      width: '100%',
      margin: '0px',
      padding: '0px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
);
