import GitHubIcon from '@mui/icons-material/GitHub';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            © created by Aleksandr Siryi
          </Typography>
          <IconButton
            size="large"
            // edge="start"
            color="inherit"
            target="__blank"
            href="https://github.com/theobroma/cryptoverse-mui-v5"
            data-testid="github-link"
            aria-label="Github Link"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
