import React, {useState, useCallback} from 'react';

import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {TextField} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

export interface PropsFields {
  label: string;
  type: 'email' | 'password' | 'text';
  required: boolean;
}
[];

interface PropsCustomInput {
  validation?: (arg0: string) => string;
  type?: 'email' | 'password' | 'text';
  required?: boolean;
  label: string;
}

const CustomInput: React.FC<PropsCustomInput> = ({
  validation,
  label,
  type = 'text',
  required = false,
}) => {
  const classes = useStyles({});

  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      if (!validation) {
        setErrorMessage('');
        setValue(event.target.value);
        return;
      }

      const errorMessage = validation(event.target.value);

      if (!errorMessage) {
        setErrorMessage('');
        return;
      }

      setErrorMessage(errorMessage);
    },
    []
  );

  return (
    <>
      <TextField
        className={classes.input}
        required={required}
        value={value}
        error={!!errorMessage}
        label={label}
        variant="outlined"
        onChange={handleChange}
        type={type}
      />
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </>
  );
};

export default CustomInput;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      margin: '10px 0px',
      width: '100%',
      maxWidth: 'null',
    },
  })
);
