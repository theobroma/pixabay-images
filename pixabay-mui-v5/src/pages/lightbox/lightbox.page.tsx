import { Container, Typography } from '@mui/material';

import { LightboxGallery } from './lightbox-gallery/lightbox-gallery';

const LightboxPage = () => (
  <Container maxWidth="lg">
    <Typography variant="h5" component="h2">
      Lightbox
    </Typography>
    <LightboxGallery />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default LightboxPage;
