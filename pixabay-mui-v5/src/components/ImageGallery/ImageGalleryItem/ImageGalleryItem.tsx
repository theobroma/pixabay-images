import { usePopupState, bindTrigger } from 'material-ui-popup-state/hooks';

import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { DialogDynamic } from '@/atoms/dialog/dialog';
import { HitsEntityType } from '@/types';

interface Props {
  hit: HitsEntityType;
}

export const ImageGalleryItem = ({ hit }: Props) => {
  const popupState = usePopupState({
    variant: 'dialog',
  });

  return (
    <>
      <ImageListItem key={hit.id} {...bindTrigger(popupState)}>
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
      <DialogDynamic popupState={popupState} hit={hit} />
    </>
  );
};
