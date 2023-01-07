import { bindDialog } from 'material-ui-popup-state/hooks';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { HitsEntityType } from '@/types';

interface Props {
  popupState: any;
  hit: HitsEntityType;
}

export const DialogDynamic = ({ popupState, hit }: Props) => (
  <Dialog
    {...bindDialog(popupState)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    fullWidth
    maxWidth="xl"
  >
    <DialogTitle id="alert-dialog-title">{hit.tags}</DialogTitle>
    <DialogContent>
      <DialogContentText
        id="alert-dialog-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <img
          style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 64px)' }}
          src={hit.largeImageURL}
          alt={hit.tags}
        />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={popupState.close} autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);
