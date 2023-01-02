import { useEffect } from 'react';

import { Container, Grid, Typography } from '@mui/material';

import { AppError } from '@/atoms/AppError/AppError';
import { PageLoader } from '@/atoms/page-loader/page-loader';
import { AppSearch } from '@/components/AppSearch/AppSearch';
import { ImageGallery } from '@/components/ImageGallery/ImageGallery';
import { useNonInitialEffect } from '@/hooks/useNonInitialEffect';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { picturesSelector } from '@/store/pictures/selectors';
import { getPicturesTC } from '@/store/pictures/slice';

const SlicePage = () => {
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
    <Container maxWidth="lg">
      <Typography variant="h5" component="h2">
        Slice Version
      </Typography>
      <AppSearch />
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
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default SlicePage;
