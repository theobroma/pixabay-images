import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { HitsEntityType } from '@/types';

interface Props {
  hit: HitsEntityType;
}

export const ImageGalleryItem = ({ hit }: Props) => {
  // console.log('hit :>> ', hit.webformatURL);

  return (
    <ImageListItem
      key={hit.id}
      // onClick={handleClick}
    >
      <img src={hit.webformatURL} alt={hit.tags} loading="lazy" />
      <ImageListItemBar
        title={hit.tags}
        subtitle={hit.user}
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
  );
};
