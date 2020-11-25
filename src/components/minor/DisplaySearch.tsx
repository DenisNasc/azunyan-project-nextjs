import React from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {List, ListItem} from '@material-ui/core';

import CustomArtistCard from 'components/singular/CustomArtistCard';

type TypeArtists = {
  artist: string;
  musics: {name: string; lyrics: string[][]}[];
}[];

interface Props {
  query: string;
  artists: TypeArtists;
}

const DisplaySearch: React.FC<Props> = ({query, artists}) => {
  const classes = useStyles();

  return (
    <>
      {!!artists.length && (
        <List className={classes.artistsList}>
          {artists
            .filter(({artist}) => artist.toLowerCase().includes(query.trim().toLowerCase()))
            .map(({artist, musics}) => (
              <ListItem key={artist} className={classes.artistsListItem}>
                <CustomArtistCard artistName={artist} musics={musics} />
              </ListItem>
            ))}
        </List>
      )}
    </>
  );
};

export default DisplaySearch;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    artistsList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 0px',
      width: '100%',
    },
    artistsListItem: {
      maxWidth: '400px',
      margin: '0px',
      padding: '0px',
    },
  })
);
