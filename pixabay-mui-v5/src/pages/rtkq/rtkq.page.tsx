import { Container, Grid, Typography } from '@mui/material';

import { AppError } from '@/atoms/AppError/AppError';
import { PageLoader } from '@/atoms/page-loader/page-loader';
import { AppSearch } from '@/components/AppSearch/AppSearch';
import { ImageGallery } from '@/components/ImageGallery/ImageGallery';
import { useGetPicturesQuery } from '@/store/pictures/api';

const RTKQPage = () => {
  const { data, isError, isLoading, error } = useGetPicturesQuery(1);
  const hits = data?.hits;

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" component="h2">
        RTKQPage
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
export default RTKQPage;
