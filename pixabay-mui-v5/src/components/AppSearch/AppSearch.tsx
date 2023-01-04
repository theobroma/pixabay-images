import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

interface Props {
  onEnterPress?: any;
}

export const AppSearch = ({ onEnterPress }: Props) => {
  const [searchVal, setSearchVal] = useState('');

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setSearchVal(value);
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    if (event.key === 'Enter') {
      setSearchVal(' ');
      onEnterPress(value);
    }
  };

  return (
    <Box py={3}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="search-input">Search</InputLabel>
        <OutlinedInput
          // need for correct styles. Same text as in InputLabel
          label="Search"
          id="search-input"
          value={searchVal}
          onChange={handleChange()}
          onKeyDown={handleKey}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};
