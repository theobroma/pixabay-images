import { Container } from '@mui/material';

import { HomePictures } from './home-pictures/home-pictures';
import { ThemeExample } from './theme-example/theme-example';
import { ZustandExample } from './zustand-example/zustand-example';
// import { QueryExample } from './query-example/query-example';

const HomePage = () => (
  <Container maxWidth="lg">
    <span>HomePage</span>
    {/* <QueryExample /> */}
    <ZustandExample />
    <ThemeExample />
    <HomePictures />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
