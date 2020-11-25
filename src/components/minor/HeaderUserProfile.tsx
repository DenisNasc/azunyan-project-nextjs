import React, {useCallback} from 'react';
import {useRouter} from 'next/router';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Avatar, Container, Typography} from '@material-ui/core';

interface Props {
  id: string;
  name: string;
  profileImageUrl: string;
}

const HeaderUserProfile: React.FC<Props> = ({name, profileImageUrl, id}) => {
  const classes = useStyles({});
  const router = useRouter();

  const handleClick = useCallback(() => router.push(`/users/${id}`), [router, id]);

  return (
    <Container className={classes.container} onClick={handleClick}>
      <Typography className={classes.typography}>{name || 'Sign In'}</Typography>

      <Avatar className={classes.avatar} src={profileImageUrl} />
    </Container>
  );
};

export default HeaderUserProfile;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: '0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '300px',
      width: 'auto',
      '&:hover': {cursor: 'pointer', opacity: 0.5},
    },
    avatar: {
      marginLeft: theme.spacing(3),
    },
    typography: {},
  })
);
