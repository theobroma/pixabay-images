import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';

const BackToTop = () => {
  const trigger = useScrollTrigger();

  const handleClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default BackToTop;
