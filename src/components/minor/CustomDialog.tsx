import React, {useCallback} from 'react';
import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';

import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';

import {PropsFields} from 'components/singular/CustomInput';
import CustomForm from 'components/minor/CustomForm';

interface PropsCustomDialog {
  dialogOpen: boolean;
  handleForgotPassword: () => void;
  handleClose: () => void;
}

const loginFields: PropsFields[] = [
  {
    type: 'email',
    required: true,
    label: 'E-mail',
  },
  {
    type: 'password',
    required: true,
    label: 'Password',
  },
];

const CustomDialog: React.FC<PropsCustomDialog> = ({
  dialogOpen,
  handleClose,
  handleForgotPassword,
}) => {
  const classes = useStyles({});

  const handleSubmitAsync = useCallback(async () => {
    handleClose();
    return '';
  }, []);

  return (
    <Dialog open={dialogOpen} onClose={handleClose} className={classes.dialog}>
      <DialogTitle className={classes.dialogTitle}>Login</DialogTitle>

      <DialogContent className={classes.dialogContent}>
        <CustomForm
          handleSubmitAsync={handleSubmitAsync}
          fields={loginFields}
          submitLabel="Login"
        />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button color="primary" onClick={handleForgotPassword}>
          Forgot password?
        </Button>
        <Button color="primary" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ul: {
      listStyle: 'none',
      margin: '0px',
      padding: '0px',
    },
    dialog: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dialogTitle: {
      textAlign: 'center',
    },
    dialogContent: {},
    dialogActions: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
);
