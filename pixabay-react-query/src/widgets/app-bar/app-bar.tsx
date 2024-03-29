import { PropsWithChildren, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { BackToTop } from '@/shared/uikit/back-to-top/back-to-top';
import { AppBreadcrumbs } from '@/shared/uikit/breadcrumbs/breadcrumbs';
import { HideOnScroll } from '@/shared/uikit/hide-on-scroll/hide-on-scroll';

import { AppBar, DrawerHeader, drawerWidth, Main } from './app-bar.styled';
import { NestedList } from './nested-list/nested-list';

export const PersistentDrawerLeft = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} className="HolyGrail-content">
      <HideOnScroll>
        <AppBar position="fixed" open={isOpen}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <RouterLink
              to={{ pathname: '/' }}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Typography variant="h6" noWrap component="div">
                MovieDB App
              </Typography>
            </RouterLink>
            <Box sx={{ flexGrow: 1 }} />
            {/* Menus */}
            {/* <FavouritesBadge /> */}
            {/* <LanguageMenu /> */}
            {/* <ThemeMenu /> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <BackToTop />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <NestedList />
      </Drawer>
      <Main open={isOpen}>
        {/* anchor for BackToTop */}
        <DrawerHeader id="back-to-top-anchor" />
        <AppBreadcrumbs />
        {children}
      </Main>
    </Box>
  );
};
