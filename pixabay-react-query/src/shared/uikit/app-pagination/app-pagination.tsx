// https://mui.com/material-ui/react-pagination/#router-integration
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { UsePaginationProps } from '@mui/material/usePagination/usePagination';

interface Props extends UsePaginationProps {
  relativeBaseUrl: string;
}

export const AppPagination = ({
  relativeBaseUrl,
  onChange,
  count = 10,
  page,
  ...rest
}: Props) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', my: '12px' }}>
    <Pagination
      color="primary"
      page={page}
      onChange={onChange}
      count={count}
      {...rest}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`${relativeBaseUrl}${
            item.page === 1 ? '' : `?page=${item.page}`
          }`}
          {...item}
        />
      )}
    />
  </Box>
);
