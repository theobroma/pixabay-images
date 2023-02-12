import type { SlideProps } from '@mui/material/Slide';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export const HideOnScroll = ({
  children,
}: {
  children: SlideProps['children'];
}) => {
  const canTrigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!canTrigger}>
      {children}
    </Slide>
  );
};
