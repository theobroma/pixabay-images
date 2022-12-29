import { useEffect, useState } from 'react';

import { Container, Box } from '@mui/material';

import { ImageGallery } from '@/components/ImageGallery/ImageGallery';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { picturesSelector } from '@/store/pictures/selectors';
import { getPicturesTC } from '@/store/pictures/slice';

const SlicePage = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const {
    data: { hits },
    pictureSearch,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useAppSelector(picturesSelector);

  useEffect(() => {
    setPage(1); // reset page
    dispatch(getPicturesTC({ page: 1 })); // works also as initial fetch
  }, [dispatch, pictureSearch]); // without page

  return (
    <Container maxWidth="lg">
      <Box>SlicePage</Box>
      <ImageGallery
        hits={hits}
        // isFetching={isFetching}
        error={error}
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default SlicePage;
