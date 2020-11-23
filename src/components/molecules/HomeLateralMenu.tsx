import React from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Typography, List} from '@material-ui/core';

import CustomListItem, {TypeMusic} from 'components/atoms/CustomListItem';

export type TypePlaylist = {
  name: string;
  musics: TypeMusic[];
};

interface PropsHomeLateralMenu {
  playlists: TypePlaylist[];
  title: string;
}

const HomeLateralMenu: React.FC<PropsHomeLateralMenu> = ({playlists, title}) => {
  const classes = useStyles({});

  return (
    <>
      <Typography className={classes.title}>{title.toUpperCase()}</Typography>

      <List className={classes.list} component="nav">
        {playlists.map(({name, musics}) => (
          <CustomListItem key={name} playlistName={name.toUpperCase()} musics={musics} />
        ))}
      </List>
    </>
  );
};

export default HomeLateralMenu;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: 'center',
      padding: '20px 0px',
      fontWeight: 'bold',
    },
    list: {},
  })
);
