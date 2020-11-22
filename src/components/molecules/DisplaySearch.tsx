import React from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {List, ListItem} from '@material-ui/core';

import CustomSearchMusic from 'components/atoms/CustomSearchMusic';
import CustomArtistCard from 'components/atoms/CustomArtistCard';

interface Props {
  query: string;
  musicsDB: {artistName: string; musics: {lyrics: string[]; name: string}[]}[];
}

const DisplaySearch: React.FC<Props> = ({query, musicsDB}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CustomSearchMusic />
      <List className={classes.artistsList}>
        {musicsDB
          .filter(({artistName}) => artistName.toLowerCase().includes(query.trim().toLowerCase()))
          .map(({artistName, musics}) => (
            <ListItem key={artistName} className={classes.artistsListItem}>
              <CustomArtistCard artistName={artistName} musics={musics} />
            </ListItem>
          ))}
      </List>
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
