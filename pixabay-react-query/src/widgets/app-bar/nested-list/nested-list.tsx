import { useState } from 'react';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import List from '@mui/material/List';

import { PageEnum } from '@/enums/page.enum';

import { ListItemLink } from './list-item-link/list-item-link';

export const NestedList = () => {
  const [isOpen1, setOpen1] = useState(true);
  const [isOpen2, setOpen2] = useState(true);

  const handleClick1 = () => {
    setOpen1(!isOpen1);
  };

  const handleClick2 = () => {
    setOpen2(!isOpen2);
  };

  return (
    <List aria-label="primary routes">
      <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
      {/* 2 */}
      <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <WhatshotIcon />
        </ListItemIcon>
        <ListItemText primary="Trending" />
        {isOpen1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            to={PageEnum.TrendingMovies}
            primary="Movies"
            icon={<MovieIcon />}
            sx={{ pl: 4 }}
          />
          <ListItemLink
            to={PageEnum.TrendingTV}
            primary="TV Shows"
            icon={<TvIcon />}
            sx={{ pl: 4 }}
          />
        </List>
      </Collapse>
      {/* 3 */}
      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="Favourites" />
        {isOpen2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink
            to={PageEnum.FavouritesMovies}
            primary="Movies"
            icon={<MovieIcon />}
            sx={{ pl: 4 }}
          />
          <ListItemLink
            to={PageEnum.FavouritesTV}
            primary="TV Shows"
            icon={<TvIcon />}
            sx={{ pl: 4 }}
          />
        </List>
      </Collapse>
    </List>
  );
};
