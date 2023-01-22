import { Container, Typography } from '@mui/material';

import { NestedList } from '@/components/AppBar/NestedList/NestedList';

const HomePage = () => (
  <Container maxWidth="lg">
    <Typography variant="h5" component="h2">
      Home
    </Typography>
    <NestedList />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
