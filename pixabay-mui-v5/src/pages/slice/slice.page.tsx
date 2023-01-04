import { Container, Typography } from '@mui/material';

import { AppSearch } from '@/components/AppSearch/AppSearch';

import { SliceGallery } from './slice-gallery/slice-gallery';

const SlicePage = () => (
  <Container maxWidth="lg">
    <Typography variant="h5" component="h2">
      Slice Version
    </Typography>
    <AppSearch />
    <SliceGallery />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default SlicePage;
