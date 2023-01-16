import * as React from 'react';
import type { NavLinkProps } from 'react-router-dom';
import {
  // Link as RouterLink,
  // LinkProps as RouterLinkProps,
  NavLink as RouterLink,
} from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { SxProps, Theme } from '@mui/material/styles';

interface ListItemLinkProps {
  sx?: SxProps<Theme>;
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

export const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, sx, to } = props;

  const renderLink = React.useMemo(
    () =>
      /* eslint-disable react/no-unstable-nested-components */
      React.forwardRef<HTMLAnchorElement, Omit<NavLinkProps, 'to'>>(
        function Link(itemProps, ref) {
          return (
            <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
          );
        },
      ),
    /* eslint-enable */
    [to],
  );

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        sx={[
          {
            '&.active': {
              color: 'secondary.main',
              '& .MuiSvgIcon-root': {
                color: 'secondary.main',
              },
            },
          },
          // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};
