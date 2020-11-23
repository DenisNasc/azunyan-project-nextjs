import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import createAxiosInstance from 'axios-config';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {
  ExpandMore as IconExpandMore,
  ExpandLess as IconExpandLess,
  PlayArrowRounded as IconPlayArrowRounded,
} from '@material-ui/icons';
import {Collapse, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';

import {SET_CURRENT_MUSIC} from 'state/actions/app';

interface PropsCustomListItem {
  musics: {name: string; artist: string}[];
  playlistName: string;
}

const CustomListItem: React.FC<PropsCustomListItem> = ({playlistName, musics}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const axios = createAxiosInstance();

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(state => !state);

  const setMusicFromPlaylist = async (musicName: string, artist: string) => {
    musicName = musicName.trim().toLowerCase();
    artist = artist.trim().toLowerCase();

    const {data} = await axios.get(`/mongo/musics?artist=${artist}&musicName=${musicName}`);
    const payload = {currentMusic: {...data, artist}};
    console.log(payload);

    dispatch({type: SET_CURRENT_MUSIC, payload});
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={playlistName} />
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
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
                onClick={() => setMusicFromPlaylist(name, artist)}
                className={classes.listItemIcon}
              >
                <IconPlayArrowRounded />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default CustomListItem;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      width: '100%',
      margin: '0px',
      padding: `0px ${theme.spacing(3)}px`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    listItemIcon: {
      minWidth: '0px',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    primaryTypography: {
      fontSize: '10pt',
    },
    secondaryTypography: {
      fontSize: '8pt',
    },
  })
);
