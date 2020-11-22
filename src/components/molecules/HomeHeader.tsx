import React, {useCallback} from 'react';
import {useRouter} from 'next/router';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Divider, IconButton} from '@material-ui/core';
import {Person as PersonIcon, ExitToApp as IconExitToApp} from '@material-ui/icons';

import Link from 'components/Link';

import CustomUserHeaderProfile, {TypeUser} from 'components/atoms/CustomUserHeaderProfile';

interface PropsHomeHeader {
  user?: TypeUser;
}

const HomeHeader: React.FC<PropsHomeHeader> = ({user}) => {
  const classes = useStyles({});
  const router = useRouter();

  const handleLogout = useCallback(() => {
    router.push('/login');
  }, []);

  return (
    <div className={classes.container}>
      {user ? (
        <CustomUserHeaderProfile user={user} />
      ) : (
        <>
          <Link style={{color: 'white'}} href="/home">
            Login without a account
          </Link>
          <IconButton className={classes.iconContainer}>
            <PersonIcon />
          </IconButton>
        </>
      )}

      <Divider orientation="vertical" light />

      <IconButton className={classes.exitIconContainer} onClick={handleLogout}>
        <IconExitToApp />
      </IconButton>
    </div>
  );
};

export default HomeHeader;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100%',
      margin: '0px',
      padding: '0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    userName: {color: 'white'},
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      margin: '0px 20px',
      width: '30px',
      height: '30px',
      background: '#fff',

      '&:hover': {
        background: '#fff',
        opacity: 0.5,
      },
    },
    exitIconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      margin: '0px 20px',
      width: '30px',
      height: '30px',
      background: 'none',
      color: 'white',
      '&:hover': {
        color: 'red',
        opacity: 0.5,
      },
    },
  })
);
