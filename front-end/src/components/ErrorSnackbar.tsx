import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import { hideSnackbar, selectSnackbar } from '../store/slices/snackbarSlice';

const ErrorSnackbar: FC = () => {
  const dispatch = useDispatch();
  const { open, message } = useSelector(selectSnackbar);

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Alert onClose={handleClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
