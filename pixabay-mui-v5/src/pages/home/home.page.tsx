import { Container, Box } from '@mui/material';

import { DialogPopupState } from '@/atoms/dialog/dialog';

const HomePage = () => (
  <Container maxWidth="lg">
    <Box>HomePage</Box>
    <DialogPopupState />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
