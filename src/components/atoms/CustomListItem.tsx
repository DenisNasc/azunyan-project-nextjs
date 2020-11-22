import React, {useState} from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {ExpandMore as IconExpandMore, ExpandLess as IconExpandLess} from '@material-ui/icons';
import {Collapse, List, ListItem, ListItemText} from '@material-ui/core';

export type TypeMusic = {
  name: string;
  artist: string;
  released?: string;
  lyrics?: string;
};

interface PropsCustomListItem {
  musics: TypeMusic[];
  playlistName: string;
}

const CustomListItem: React.FC<PropsCustomListItem> = ({playlistName, musics}) => {
  const classes = useStyles({});

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(state => !state);

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={playlistName} />
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {musics.map(({name, artist}) => (
            <ListItem key={name} button>
              <ListItemText primary={name} secondary={artist} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default CustomListItem;

const useStyles = makeStyles((theme: Theme) => createStyles({}));
