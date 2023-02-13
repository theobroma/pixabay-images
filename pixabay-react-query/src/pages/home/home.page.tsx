import { Container } from '@mui/material';

import { HomePictures } from './home-pictures/home-pictures';
// import { QueryExample } from './query-example/query-example';

const HomePage = () => (
  <Container maxWidth="lg">
    <span>HomePage</span>
    {/* <QueryExample /> */}
    <HomePictures />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
