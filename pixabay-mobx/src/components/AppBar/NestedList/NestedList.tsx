import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import List from '@mui/material/List';

import { ListItemLink } from './list-item-link/list-item-link';

export const NestedList = () => (
  <List aria-label="primary routes">
    <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
    <ListItemLink
      to="/slice-load-more"
      primary="Slice Load More"
      icon={<LayersIcon />}
    />
    <ListItemLink
      to="/slice-infinite-scroll"
      primary="Slice Infinite Scroll"
      icon={<LayersIcon />}
    />
    <ListItemLink
      to="/light-box"
      primary="Light Box"
      icon={<WorkspacePremiumIcon />}
    />
    <ListItemLink
      to="/rtkq"
      primary="RTK Query"
      icon={<WorkspacePremiumIcon />}
    />
  </List>
);
