import { useSnackbar } from 'notistack';
import { useState } from 'react';
import * as React from 'react';

import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';

import { useNonInitialEffect } from '@/hooks/useNonInitialEffect';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { themeSelector } from '@/store/ui/selectors';
import { setThemeAC } from '@/store/ui/slice';
import { ThemeOptionInterface } from '@/types';

import { themeOptions } from './ThemeMenu.options';

export const ThemeMenu = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentTheme = useAppSelector(themeSelector);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    value: ThemeOptionInterface['value'],
  ) => {
    dispatch(setThemeAC(value));
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
      {themeOptions.map((option) => (
        <MenuItem
          key={option.value}
          selected={option.value === currentTheme}
          onClick={(event) => handleMenuItemClick(event, option.value)}
        >
          {option.value === currentTheme ? (
            <RadioButtonCheckedIcon
              fontSize="small"
              style={{ marginRight: '8px', color: option.iconColor }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              fontSize="small"
              style={{ marginRight: '8px' }}
            />
          )}
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Tooltip title="Select a theme">
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
      </Tooltip>
      {renderMenu}
    </Box>
  );
};
