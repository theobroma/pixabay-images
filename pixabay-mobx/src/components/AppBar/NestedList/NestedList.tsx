import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import List from '@mui/material/List';

import { ListItemLink } from './list-item-link/list-item-link';

export const NestedList = () => (
  <List aria-label="primary routes">
    <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
    <ListItemLink to="/something" primary="Something" icon={<LayersIcon />} />
  </List>
);
