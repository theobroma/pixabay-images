import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';

import ListItemLink from './ListItemLink';

const NestedList = () => {
  return (
    <List aria-label="primary routes">
      <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
      <ListItemLink
        to="/cryptocurrencies"
        primary="Cryptocurrencies"
        icon={<AutoGraphIcon />}
      />
      <ListItemLink
        to="/exchanges"
        primary="Exchanges"
        icon={<CurrencyExchangeIcon />}
      />
    </List>
  );
};

export default NestedList;
