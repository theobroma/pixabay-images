import { Grid } from '@mui/material';

import { AppError } from '@/atoms/AppError/AppError';
import { PageLoader } from '@/atoms/page-loader/page-loader';
import { ImageGallery } from '@/components/ImageGallery/ImageGallery';
import { useGetPicturesQuery } from '@/store/pictures/api';

export const RtkqGallery = () => {
  const { data, isError, isLoading, error } = useGetPicturesQuery({
    page: 1,
    searchQuery: 'flower',
  });
  const hits = data?.hits;

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
