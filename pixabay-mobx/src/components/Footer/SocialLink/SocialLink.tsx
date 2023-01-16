import React from 'react';

import MuiLink from '@mui/material/Link';

type Props = {
  href: string;
  icon: React.ReactElement;
};

export const SocialLink = ({ href, icon, ...rest }: Props) => (
  <MuiLink
    href={href}
    target="_blank"
    sx={{ textDecoration: 'none', cursor: 'pointer', color: 'common.white' }}
    {...rest}
  >
    {icon}
  </MuiLink>
);
