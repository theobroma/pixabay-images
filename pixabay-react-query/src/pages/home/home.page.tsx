import { Container } from '@mui/material';

import { QueryExample } from './query-example/query-example';

const HomePage = () => (
  <Container maxWidth="lg">
    <span>HomePage</span>
    <QueryExample />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
