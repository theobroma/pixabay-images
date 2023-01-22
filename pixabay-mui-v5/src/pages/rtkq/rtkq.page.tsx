import { Container, Typography } from '@mui/material';

import { RtkqGallery } from './rtkq-gallery/rtkq-gallery';
import { RtqkSearch } from './rtqk-search/rtqk-search';

const RTKQPage = () => (
  <Container maxWidth="lg">
    <Typography variant="h5" component="h2">
      RTKQ
    </Typography>
    <RtqkSearch />
    <RtkqGallery />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default RTKQPage;
