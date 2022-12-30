import { Alert, Stack } from '@mui/material';

type Props = {
  error: any;
};

export const AppError = ({ error }: Props) => {
  let err = '';

  // console.log('typeof error', typeof error);

  if (typeof error === 'string') {
    err = error;
  } else {
    err = JSON.stringify(error);
  }

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{err}</Alert>
    </Stack>
  );
};
