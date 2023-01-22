/* eslint-disable @typescript-eslint/naming-convention */
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { Container } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link, { LinkProps } from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const breadcrumbNameMap: { [key: string]: string } = {
  '/slice-load-more': 'Slice Load More',
  '/slice-infinite-scroll': 'Slice Infinite Scroll',
  '/light-box': 'Light Box',
  '/rtkq': 'RTKQ',
};

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => {
  return <Link {...props} component={RouterLink as any} />;
};

export const AppBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Container maxWidth="lg">
      <Breadcrumbs aria-label="breadcrumb">
        <LinkRouter underline="hover" color="inherit" to="/">
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
  );
};
