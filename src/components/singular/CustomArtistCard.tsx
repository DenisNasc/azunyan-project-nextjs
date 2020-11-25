import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Collapse,
  Typography,
  List,
  ListItem,
  Container,
  IconButton,
} from '@material-ui/core';

import {PlayArrow as IconPlayArrow, PlaylistAdd as IconPlaylistAdd} from '@material-ui/icons';

import {ADD_MUSIC_TO_CURRENT_PLAYLIST, SET_CURRENT_MUSIC} from 'state/actions/app';

interface Props {
  artistName: string;
  musics: {lyrics: string[][]; name: string}[];
}

const CustomArtistCard: React.FC<Props> = ({artistName, musics}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(!open), [open]);

  const setCurrentMusic = useCallback(
    ({name, lyrics, artist}) => {
      const payload = {setCurrentMusic: {name, lyrics, artist}};
      dispatch({type: SET_CURRENT_MUSIC, payload});
    },
    [dispatch]
  );

  const addMusicToCurrentPlaylist = useCallback(
    ({name, lyrics, artist}) => {
      const payload = {addMusicToCurrentPlaylist: {name, lyrics, artist}};
      dispatch({type: ADD_MUSIC_TO_CURRENT_PLAYLIST, payload});
    },
    [dispatch]
  );

  return (
    <Container className={classes.container}>
      <Card className={classes.artistCard}>
        <CardActionArea onClick={handleOpen} className={classes.artistCardActionArea}>
          <CardMedia
            className={classes.artistCardMedia}
            image={`http://localhost:3000/api/images?artist=${artistName
              .trim()
              .replace(/ /g, '_')
              .toLowerCase()}`}
            title="Contemplative Reptile"
          />

          <CardContent className={classes.artistCardContent}>
            <Typography gutterBottom variant="h6" component="h2">
              {artistName.toUpperCase()}
            </Typography>
            <Typography gutterBottom variant="caption" component="h2">
              {`${musics.length} musics`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Collapse className={classes.collapse} in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {musics.map(({name, lyrics}) => (
            <ListItem key={name} className={classes.listItem}>
              <Typography className={classes.typography}>{name.toUpperCase()}</Typography>
              <div>
                <IconButton onClick={() => setCurrentMusic({name, lyrics, artist: artistName})}>
                  <IconPlayArrow />
                </IconButton>
                <IconButton
                  onClick={() => addMusicToCurrentPlaylist({name, lyrics, artist: artistName})}
                >
                  <IconPlaylistAdd />
                </IconButton>
              </div>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Container>
  );
};

export default CustomArtistCard;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '0px',
      margin: '0px',
      paddingBottom: `${theme.spacing(3)}px`,
    },
    artistCard: {
      width: '100%',
    },
    artistCardActionArea: {
      display: 'flex',
      justifyContent: 'flex-start',
      height: '100px',
      width: '100%',
    },
    artistCardMedia: {
      width: '200px',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    artistCardContent: {
      margin: '0px',
      padding: `0px ${theme.spacing(3)}px`,
      width: '100%',
    },
    collapse: {
      width: '100%',
      maxWidth: '400px',
    },
    listItem: {
      padding: '0px',
      margin: '0px',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(1),
    },
    typography: {
      fontSize: '10pt',
      padding: `${theme.spacing(1)}px 0px`,
    },
  })
);
