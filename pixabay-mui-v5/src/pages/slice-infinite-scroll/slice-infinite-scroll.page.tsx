import { Container, Typography } from '@mui/material';

import { AppSearch } from '@/components/AppSearch/AppSearch';

import { SliceInfiniteScrollGallery } from './slice-infinite-scroll-gallery/slice-infinite-scroll-gallery';

const SliceInfiniteScrollPage = () => (
  <Container maxWidth="lg">
    <Typography variant="h5" component="h2">
      Slice Infinite Scroll
    </Typography>
    <AppSearch />
    <SliceInfiniteScrollGallery />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default SliceInfiniteScrollPage;
