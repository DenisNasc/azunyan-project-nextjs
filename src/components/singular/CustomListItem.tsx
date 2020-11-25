import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import createAxiosInstance from 'axios-config';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {
  Delete as IconDelete,
  PlayCircleOutline as IconPlayCircleOutline,
  Edit as IconEdit,
} from '@material-ui/icons';
import {
  Collapse,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';

import {SET_CURRENT_MUSIC, SET_CURRENT_PLAYLIST} from 'state/actions/app';
import {DEL_MUSIC_FROM_PLAYLIST, DEL_PLAYLIST} from 'state/actions/user';

interface PropsCustomListItem {
  musics: {name: string; artist: string}[];
  playlistName: string;
}

const CustomListItem: React.FC<PropsCustomListItem> = ({playlistName, musics}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const axios = createAxiosInstance();

  const [open, setOpen] = useState(false);

  const setCurrentPlaylist = () => {
    const payload = {setCurrentPlaylist: musics};
    dispatch({type: SET_CURRENT_PLAYLIST, payload});
  };

  const handleClick = () => setOpen(state => !state);

  const handleDeletePlaylist = () => {
    const payload = {delPlaylist: {name: playlistName}};
    dispatch({type: DEL_PLAYLIST, payload});
  };

  const handleDeleteMusicFromPlaylist = (musicName: string, artist: string) => {
    musicName = musicName.trim().toLowerCase();
    artist = artist.trim().toLowerCase();

    const payload = {delMusic: {playlist: playlistName, music: musicName, artist}};
    dispatch({type: DEL_MUSIC_FROM_PLAYLIST, payload});
  };

  const setCurrentMusic = async (musicName: string, artist: string) => {
    musicName = musicName.trim().toLowerCase();
    artist = artist.trim().toLowerCase();

    const {data} = await axios.get(`/mongo/musics?artist=${artist}&musicName=${musicName}`);
    const payload = {setCurrentMusic: {...data, artist}};

    dispatch({type: SET_CURRENT_MUSIC, payload});
  };

  return (
    <>
      <Container className={classes.container}>
        <ListItemText primary={playlistName} secondary={`Songs: ${musics.length}`} />

        <IconButton className={classes.iconEdit} onClick={setCurrentPlaylist}>
          <IconPlayCircleOutline />
        </IconButton>
        <IconButton className={classes.iconEdit} onClick={handleClick}>
          <IconEdit />
        </IconButton>
        <IconButton className={classes.iconDelete} onClick={handleDeletePlaylist}>
          <IconDelete />
        </IconButton>
      </Container>

      <Collapse className={classes.collapse} in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {musics.map(({name, artist}) => (
            <ListItem className={classes.listItem} key={name}>
              <ListItemText
                primary={
                  <Typography className={classes.primaryTypography}>
                    {name.toUpperCase()}
                  </Typography>
                }
                secondary={
                  <Typography className={classes.secondaryTypography}>
                    {artist.toUpperCase()}
                  </Typography>
                }
              />
              <ListItemIcon
                onClick={() => setCurrentMusic(name, artist)}
                className={classes.listItemIconPlay}
              >
                <IconPlayCircleOutline />
              </ListItemIcon>
              <ListItemIcon
                onClick={() => handleDeleteMusicFromPlaylist(name, artist)}
                className={classes.listItemIconDelete}
              >
                <IconDelete />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CustomListItem;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      margin: '0px',
      padding: '0px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconEdit: {
      width: '24px',
      height: '24px',
      marginRight: theme.spacing(3),
    },
    iconDelete: {
      width: '24px',
      height: '24px',
      color: theme.palette.error.main,
    },
    collapse: {width: '100%', paddingLeft: theme.spacing(3)},
    listItem: {
      width: '100%',
      margin: '0px',
      padding: '0px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    listItemIconPlay: {
      minWidth: '0px',
      marginRight: theme.spacing(3),
      '&:hover': {
        cursor: 'pointer',
      },
    },
    listItemIconDelete: {
      minWidth: '0px',
      '&:hover': {
        cursor: 'pointer',
      },
      color: theme.palette.error.main,
    },
    primaryTypography: {
      fontSize: '10pt',
    },
    secondaryTypography: {
      fontSize: '8pt',
    },
  })
);
