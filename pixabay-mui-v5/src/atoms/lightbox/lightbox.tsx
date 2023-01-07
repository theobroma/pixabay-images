import FsLightbox from 'fslightbox-react';

import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { lightboxSelector } from '@/store/lightbox/selectors';
import { setLightboxAC } from '@/store/lightbox/slice';
import { HitsEntityType } from '@/types';

interface Props {
  hits: HitsEntityType[];
}

export const Lightbox = ({ hits }: Props) => {
  const dispatch = useAppDispatch();
  const lightboxController = useAppSelector(lightboxSelector);
  const sources = hits.map((hit) => hit.largeImageURL);

  const handleClose = () => {
    dispatch(setLightboxAC({ slide: 0, toggler: false }));
  };

  return (
    <FsLightbox
      toggler={lightboxController.toggler}
      sources={sources}
      slide={lightboxController.slide}
      onClose={handleClose}
    />
  );
};
