import { Backdrop, CircularProgress } from '@mui/material';

export const PageLoader = () => (
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);
