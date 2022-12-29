import { useSnackbar } from 'notistack';
import { useState } from 'react';
import * as React from 'react';

import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';

import { useNonInitialEffect } from '@/hooks/useNonInitialEffect';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { themeSelector } from '@/store/ui/selectors';
import { setThemeAC } from '@/store/ui/slice';
import { ThemeColorsType } from '@/types';

const options = [
  'light',
  'dark',
  'deepPurpleAmber',
  'pinkBlueGrey',
] as ThemeColorsType[];

export const ThemeMenu = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const currentTheme = useAppSelector(themeSelector);
  const [selectedIndex, setSelectedIndex] = useState(
    options.indexOf(currentTheme),
  );

  const isMenuOpen = Boolean(anchorEl);
  //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    dispatch(setThemeAC(options[index]));
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //   const handleMobileMenuClose = () => {
  //     setMobileMoreAnchorEl(null);
  //   };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  useNonInitialEffect(() => {
    enqueueSnackbar(`Theme changed to ${currentTheme}`, {
      variant: 'warning',
    });
  }, [enqueueSnackbar, currentTheme]);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {options.map((option, index) => (
        <MenuItem
          key={option}
          // disabled={index === 0}
          selected={index === selectedIndex}
          onClick={(event) => handleMenuItemClick(event, index)}
        >
          {index === selectedIndex ? (
            <RadioButtonCheckedIcon
              fontSize="small"
              style={{ marginRight: '8px' }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              fontSize="small"
              style={{ marginRight: '8px' }}
            />
          )}
          {option}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <FormatColorFillIcon />
      </IconButton>
      {renderMenu}
    </Box>
  );
};
