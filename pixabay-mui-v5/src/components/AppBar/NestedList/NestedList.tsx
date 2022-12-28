import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import List from '@mui/material/List';

import { ListItemLink } from './list-item-link/list-item-link';

export const NestedList = () => (
  <List aria-label="primary routes">
    <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
    <ListItemLink to="/slice" primary="Slice" icon={<LayersIcon />} />
    <ListItemLink
      to="/rtkq"
      primary="RTK Query"
      icon={<WorkspacePremiumIcon />}
    />
  </List>
);
