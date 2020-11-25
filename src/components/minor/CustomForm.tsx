import React, {useState, useCallback} from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';
import {Button, Container} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

import CustomInput, {PropsFields} from 'components/singular/CustomInput';

interface PropsSignUpForm {
  fields: PropsFields[];
  submitLabel: string;
  handleSubmitAsync: () => Promise<string>;
}

const SignUpForm: React.FC<PropsSignUpForm> = ({fields, submitLabel, handleSubmitAsync}) => {
  const classes = useStyles({});
  const [formErroMessage, setFormErrorMessage] = useState('');

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const error = await handleSubmitAsync(); // dispatch submit to a server

    if (error) {
      setFormErrorMessage(error);
      return;
    }

    setFormErrorMessage('');
    console.log('submit!');
  }, []);

  return (
    <Container className={classes.form} component="form" onSubmit={handleSubmit}>
      <ul className={classes.ul}>
        {fields.map(({label, required, type}) => (
          <li key={label}>
            <CustomInput label={label} required={required} type={type} />
          </li>
        ))}
      </ul>
      {formErroMessage && <Alert severity="error">{formErroMessage}</Alert>}
      <Button className={classes.button} variant="contained" color="secondary" type="submit">
        {submitLabel}
      </Button>
    </Container>
  );
};

export default SignUpForm;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {},
    ul: {
      listStyle: 'none',
      margin: '0px',
      padding: '0px',
    },
    button: {
      width: '100%',
      maxWidth: '400px',
    },
  })
);
