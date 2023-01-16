import { useSnackbar } from 'notistack';
import { useState } from 'react';
import * as React from 'react';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TranslateIcon from '@mui/icons-material/Translate';
import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';

import { useNonInitialEffect } from '@/hooks/useNonInitialEffect';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { languageSelector } from '@/store/ui/selectors';
import { setLanguageAC } from '@/store/ui/slice';
import { BaseOptionInterface } from '@/types';

import { languageMenuOptions } from './LanguageMenu.options';

export const LanguageMenu = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentLanguage = useAppSelector(languageSelector);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    value: BaseOptionInterface['value'],
  ) => {
    dispatch(setLanguageAC(value));
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useNonInitialEffect(() => {
    const labelText = languageMenuOptions.find(
      ({ value }) => value === currentLanguage,
    )?.label;
    enqueueSnackbar(`Language changed to ${labelText}`, {
      variant: 'warning',
    });
  }, [enqueueSnackbar, currentLanguage]);

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
      {languageMenuOptions.map((option) => (
        <MenuItem
          key={option.value}
          selected={option.value === currentLanguage}
          onClick={(event) => handleMenuItemClick(event, option.value)}
        >
          {option.value === currentLanguage ? (
            <RadioButtonCheckedIcon
              fontSize="small"
              color="primary"
              style={{ marginRight: '8px' }}
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
      <Tooltip title="Select a language">
        <IconButton
          size="large"
          edge="end"
          aria-label="language"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <TranslateIcon />
        </IconButton>
      </Tooltip>
      {renderMenu}
    </Box>
  );
};
