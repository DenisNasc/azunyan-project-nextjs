import React from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {List, ListItem} from '@material-ui/core';

import CustomSearchMusic from 'components/atoms/CustomSearchMusic';
import CustomArtistCard from 'components/atoms/CustomArtistCard';

type TypeMusicsFromDB = {
  _id: string;
  artist: string;
  musics: {name: string; lyrics: string[][]}[];
}[];

interface Props {
  query: string;
  musicsFromDB: TypeMusicsFromDB;
}

const DisplaySearch: React.FC<Props> = ({query, musicsFromDB}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CustomSearchMusic />
      {!!musicsFromDB.length && (
        <List className={classes.artistsList}>
          {musicsFromDB
            .filter(({artist}) => artist.toLowerCase().includes(query.trim().toLowerCase()))
            .map(({artist, musics}) => (
              <ListItem key={artist} className={classes.artistsListItem}>
                <CustomArtistCard artistName={artist} musics={musics} />
              </ListItem>
            ))}
        </List>
      )}
    </div>
  );
};

export default DisplaySearch;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      padding: `${theme.spacing(3)}px 0px`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
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
