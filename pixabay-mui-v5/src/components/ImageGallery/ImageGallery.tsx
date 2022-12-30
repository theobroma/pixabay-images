import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { HitsEntityType, SliceUtilsType } from '@/types';

interface Props extends SliceUtilsType {
  hits: HitsEntityType[];
}

export const ImageGallery = ({
  hits = [],
  // isFetching,
  error,
  isError,
  isLoading,
  isSuccess,
}: Props) => (
  <ImageList
    //  sx={{ width: 500, height: 450 }}
    cols={5}
    rowHeight={164}
  >
    {hits.map((hit) => (
      <ImageListItem key={hit.id}>
        <img src={hit.webformatURL} alt={hit.tags} loading="lazy" />
        <ImageListItemBar
          title={hit.tags}
          // subtitle={item.author}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label="info about"
              href={hit.pageURL}
              target="_blank"
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
    ))}
  </ImageList>
);
