import { Container, Typography } from '@mui/material';

import { AppSearch } from '@/components/AppSearch/AppSearch';

import { InfiniteScrollGallery } from './infinite-scroll-gallery/infinite-scroll-gallery';
// import { SliceGallery } from './slice-gallery/slice-gallery';

const SlicePage = () => (
  <Container maxWidth="lg">
    <Typography variant="h5" component="h2">
      Slice Version
    </Typography>
    <AppSearch />
    {/* <SliceGallery /> */}
    <InfiniteScrollGallery />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default SlicePage;
