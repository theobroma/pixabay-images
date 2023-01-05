import { useEffect, useState } from 'react';

import { Box, Button, Grid } from '@mui/material';

import { AppError } from '@/atoms/AppError/AppError';
import { PageLoader } from '@/atoms/page-loader/page-loader';
import { ImageGallery } from '@/components/ImageGallery/ImageGallery';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { useNonInitialEffect } from '@/hooks/useNonInitialEffect';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { picturesSelector } from '@/store/pictures/selectors';
import { getPicturesTC, resetPicturesStateAC } from '@/store/pictures/slice';

export const SliceLoadMoreGallery = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const {
    data: { hits },
    error,
    isError,
    isLoading,
    // isSuccess,
  } = useAppSelector(picturesSelector);

  // useNonInitialEffect(() => {
  //   if (hits.length === 0) {
  //     dispatch(getPicturesTC({ page: 1 }));
  //   }
  // }, [dispatch]);

  useEffectOnce(() => {
    console.log('Triggered only once, on mount');
    dispatch(resetPicturesStateAC());
    dispatch(getPicturesTC({ page: 1 }));
  });

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [hits]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    dispatch(getPicturesTC({ page: page + 1 }));
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [hits]);

  return (
    <>
      {isLoading && <PageLoader />}
      {!!hits && <ImageGallery hits={hits} />}
      <Grid container spacing={2}>
        {/* error */}
        {isError && (
          <Grid item xs={12}>
            <AppError error={error} />
          </Grid>
        )}
      </Grid>
      <Box my={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          disabled={isLoading}
          onClick={handleLoadMore}
        >
          Load more
        </Button>
      </Box>
    </>
  );
};
