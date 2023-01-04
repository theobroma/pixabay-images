import { Container, Typography } from '@mui/material';

import { AppSearch } from '@/components/AppSearch/AppSearch';

import { SliceLoadMoreGallery } from './slice-load-more-gallery/slice-load-more-gallery';

const SliceLoadMorePage = () => (
  <Container maxWidth="lg">
    <Typography variant="h5" component="h2">
      Slice Version
    </Typography>
    <AppSearch />
    <SliceLoadMoreGallery />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default SliceLoadMorePage;
