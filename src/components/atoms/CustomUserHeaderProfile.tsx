import React, {useCallback} from 'react';
import {useRouter} from 'next/router';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Avatar, Typography} from '@material-ui/core';

export type TypeUser = {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
};

interface PropsCustomHeaderProfile {
  user: TypeUser;
}

const CustomUserHeaderProfile: React.FC<PropsCustomHeaderProfile> = ({user}) => {
  const classes = useStyles({});
  const router = useRouter();

  const {id, name, imageUrl, email} = user;

  const handleClick = useCallback(() => router.push(`/users/${id}`), []);

  return (
    <div className={classes.container} onClick={handleClick}>
      <Typography className={classes.username}>{name}</Typography>

      <Avatar className={classes.avatar} src={imageUrl} />
    </div>
  );
};

export default CustomUserHeaderProfile;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '200px',
      '&:hover': {cursor: 'pointer', opacity: 0.5},
    },
    avatar: {},
    username: {
      color: 'white',
    },
  })
);
