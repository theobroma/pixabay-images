/* eslint-disable @typescript-eslint/naming-convention */
// https://mui.com/material-ui/react-breadcrumbs/
// https://hackernoon.com/implement-a-dynamic-breadcrumb-in-reactnextjs
import { useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import { Box, Container, Divider } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import { breadcrumbNameMap } from './breadcrumbs.map';
import { LinkRouter } from './link-router/link-router';

export const AppBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // console.log('pathnames :>> ', pathnames);
  // console.log('breadcrumbNameMap :>> ', breadcrumbNameMap);

  return (
    <>
      <Divider />
      <Box sx={{ py: 1 }}>
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb">
            <LinkRouter underline="hover" color="inherit" to="/">
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </LinkRouter>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              return last ? (
                <Typography color="text.primary" key={to}>
                  {breadcrumbNameMap[to]}
                </Typography>
              ) : (
                <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                  {breadcrumbNameMap[to]}
                </LinkRouter>
              );
            })}
          </Breadcrumbs>
        </Container>
      </Box>
      <Divider sx={{ mb: 3 }} />
    </>
  );
};
