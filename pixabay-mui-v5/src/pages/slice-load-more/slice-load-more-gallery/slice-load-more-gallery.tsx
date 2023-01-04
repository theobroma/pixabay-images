import { useEffect } from 'react';

import { Grid } from '@mui/material';

import { AppError } from '@/atoms/AppError/AppError';
import { PageLoader } from '@/atoms/page-loader/page-loader';
import { ImageGallery } from '@/components/ImageGallery/ImageGallery';
import { useNonInitialEffect } from '@/hooks/useNonInitialEffect';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { picturesSelector } from '@/store/pictures/selectors';
import { getPicturesTC } from '@/store/pictures/slice';

export const SliceLoadMoreGallery = () => {
  const dispatch = useAppDispatch();
  const {
    data: { hits },
    error,
    isError,
    isLoading,
    // isSuccess,
  } = useAppSelector(picturesSelector);

  useNonInitialEffect(() => {
    if (hits.length === 0) {
      dispatch(getPicturesTC({ page: 1 }));
    }
  }, [dispatch]);

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
    </>
  );
};
