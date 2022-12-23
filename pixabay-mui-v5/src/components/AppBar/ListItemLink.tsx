import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import {
  // Link as RouterLink,
  // LinkProps as RouterLinkProps,
  NavLink as RouterLink,
  NavLinkProps,
} from 'react-router-dom';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, to } = props;

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
        sx={{
          '&.active': {
            color: 'secondary.main',
            '& .MuiSvgIcon-root': {
              color: 'secondary.main',
            },
          },
        }}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default ListItemLink;
