import {
  usePopupState,
  bindTrigger,
  bindDialog,
} from 'material-ui-popup-state/hooks';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const DialogPopupState = () => {
  const popupState = usePopupState({
    variant: 'dialog',
  });
  return (
    <>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Open Dialog
      </Button>
      <Dialog
        {...bindDialog(popupState)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Use Googles location service?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={popupState.close}>Disagree</Button>
          <Button onClick={popupState.close} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
