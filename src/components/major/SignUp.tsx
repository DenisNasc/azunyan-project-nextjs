import React, {useCallback} from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Grid, Typography} from '@material-ui/core';

import {PropsFields} from 'components/singular/CustomInput';
import CustomForm from 'components/minor/CustomForm';

const formFields: PropsFields[] = [
  {
    label: 'Name',
    type: 'text',
    required: true,
  },
  {
    label: 'E-mail',
    type: 'email',
    required: true,
  },
  {
    label: 'Password',
    type: 'password',
    required: true,
  },
  {
    label: 'Confirm Password',
    type: 'password',
    required: true,
  },
];

const SignUp = () => {
  const classes = useStyles({});

  const handleSubmitAsync = useCallback(async () => {
    return '';
  }, []);

  return (
    <Grid container alignItems="center" direction="column" className={classes.signup}>
      <Typography className={classes.signupTitle} variant="subtitle2" align="left">
        Don't have a account? Register now!
      </Typography>
      <CustomForm handleSubmitAsync={handleSubmitAsync} fields={formFields} submitLabel="Sign Up" />
    </Grid>
  );
};

export default SignUp;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    signup: {
      padding: '20px 0px',
    },
    signupTitle: {
      width: '100%',
      maxWidth: '400px',
    },
  })
);
