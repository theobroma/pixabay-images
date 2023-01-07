import { Grid } from '@mui/material';

import { AppError } from '@/atoms/AppError/AppError';
import { Lightbox } from '@/atoms/lightbox/lightbox';
import { PageLoader } from '@/atoms/page-loader/page-loader';
import { ImageGallery } from '@/components/ImageGallery/ImageGallery';
import { useAppSelector } from '@/store/configureStore';
import { useGetPicturesQuery } from '@/store/pictures/api';
import { picturesSelector } from '@/store/pictures/selectors';

export const RtkqGallery = () => {
  const { pictureSearch } = useAppSelector(picturesSelector);
  const { data, isError, isLoading, error } = useGetPicturesQuery({
    page: 1,
    searchQuery: pictureSearch,
  });
  const hits = data?.hits;

  return (
    <>
      {isLoading && <PageLoader />}
      {!!hits && <Lightbox hits={hits} />}
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
