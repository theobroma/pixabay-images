import { Container } from '@mui/material';

import { HomeGallery } from './home-gallery/home-gallery';

const HomePage = () => (
  <Container maxWidth="lg">
    <span>Home Page</span>
    <HomeGallery />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
