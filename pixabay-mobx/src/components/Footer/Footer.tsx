import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Stack, Typography } from '@mui/material';

import { SocialLink } from './SocialLink/SocialLink';

export const Footer = () => (
  <Box component="footer" sx={{ py: 5, bgcolor: 'primary.main' }}>
    <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
      <SocialLink
        href="https://www.linkedin.com/in/olexandr-siryj-39852a99/"
        icon={<LinkedInIcon />}
      />
      <SocialLink
        href="https://github.com/theobroma/"
        icon={<GitHubIcon />}
        data-testid="github-link"
        aria-label="Github Link"
      />
      <SocialLink href="https://t.me/theobroma222" icon={<TelegramIcon />} />
      <SocialLink
        href="mailto:theobroma222@gmail.com?subject=Hello%20Aleksandr,%20From%20Github"
        icon={<EmailIcon />}
      />
    </Stack>
    <Typography align="center" color="common.white">
      © {new Date().getFullYear()}, created by Aleksandr Siryi
    </Typography>
  </Box>
);
