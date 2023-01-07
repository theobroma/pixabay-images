import { Container, Box } from '@mui/material';

import { LightboxGallery } from './lightbox-gallery/lightbox-gallery';

const LightboxPage = () => (
  <Container maxWidth="lg">
    <Box>LightboxPage</Box>
    <LightboxGallery />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default LightboxPage;
