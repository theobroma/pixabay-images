import { Container, Typography } from '@mui/material';

import { AppSearch } from '@/components/AppSearch/AppSearch';

import { RtkqGallery } from './rtkq-gallery/rtkq-gallery';

const RTKQPage = () => (
  <Container maxWidth="lg">
    <Typography variant="h5" component="h2">
      RTKQPage
    </Typography>
    <AppSearch />
    <RtkqGallery />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default RTKQPage;
