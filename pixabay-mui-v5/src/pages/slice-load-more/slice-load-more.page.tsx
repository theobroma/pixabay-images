import { Container, Typography } from '@mui/material';

import { SliceLoadMoreGallery } from './slice-load-more-gallery/slice-load-more-gallery';
import { SliceLoadMoreSearch } from './slice-load-more-search/slice-load-more-search';

const SliceLoadMorePage = () => (
  <Container maxWidth="lg">
    <Typography variant="h5" component="h2">
      Slice Version
    </Typography>
    <SliceLoadMoreSearch />
    <SliceLoadMoreGallery />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default SliceLoadMorePage;
