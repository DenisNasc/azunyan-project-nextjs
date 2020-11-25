import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Container, Divider, IconButton} from '@material-ui/core';
import {ExitToApp as IconExitToApp} from '@material-ui/icons';

import HeaderUserProfile from 'components/minor/HeaderUserProfile';

import type StateStore from 'state/types';
import type StateUser from 'state/types/user';

import type {PayloadUser} from 'state/reducers/user/types';

import {
  HANDLE_USER,
  USER_STATE_CONTROLLER_START,
  USER_STATE_CONTROLLER_SUCCESS,
} from 'state/actions/user';

interface Props {
  name: string;
  profileImageUrl: string;
  id: string;
}

const HomeHeader: React.FC<Props> = ({name, profileImageUrl, id}) => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const {
    stateController: {start},
  } = useSelector<StateStore, StateUser>(state => state.user);

  useEffect(() => {
    if (!start) return;

    const payload: PayloadUser = {
      handleUser: {email: '', id: '', name: '', playlists: [], profileImageUrl: ''},
    };

    dispatch({type: HANDLE_USER, payload});
    dispatch({type: USER_STATE_CONTROLLER_SUCCESS});
  }, [dispatch, start]);

  const handleLogout = useCallback(() => {
    dispatch({type: USER_STATE_CONTROLLER_START});
  }, [dispatch]);

  return (
    <Container className={classes.container}>
      <HeaderUserProfile name={name} id={id} profileImageUrl={profileImageUrl} />

      {!id && (
        <>
          <Divider orientation="vertical" light />
          <IconButton className={classes.iconButton} onClick={handleLogout}>
            <IconExitToApp />
          </IconButton>
        </>
      )}
    </Container>
  );
};

export default HomeHeader;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100%',
      width: '100%',
      maxWidth: 'none',
      margin: '0px',
      padding: '0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
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
    iconButton: {
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
