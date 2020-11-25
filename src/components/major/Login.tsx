import React, {useState, useCallback} from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Button, Grid, Typography} from '@material-ui/core';

import CustomDialog from 'components/minor/CustomDialog';

const Login: React.FC = () => {
  const classes = useStyles({});

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClick = useCallback(() => setDialogOpen(true), []);
  const handleClose = useCallback(() => setDialogOpen(false), []);

  const handleForgotPassword = useCallback(() => {
    console.log('forgot password');
  }, []);

  return (
    <Grid container spacing={0} justify="center" alignItems="center" direction="column">
      <CustomDialog
        handleForgotPassword={handleForgotPassword}
        dialogOpen={dialogOpen}
        handleClose={handleClose}
      />

      <Typography className={classes.loginTitle} align="left" variant="subtitle2">
        Already has a account? Login!
      </Typography>
      <Button className={classes.button} variant="outlined" color="secondary" onClick={handleClick}>
        Login
      </Button>
    </Grid>
  );
};

export default Login;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginTitle: {
      width: '100%',
      maxWidth: '400px',
    },
    button: {
      width: '100%',
      maxWidth: '400px',
      marginTop: '10px',
    },
  })
);
