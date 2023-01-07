import FsLightbox from 'fslightbox-react';

import { useAppSelector } from '@/store/configureStore';
import { lightboxSelector } from '@/store/lightbox/selectors';
import { HitsEntityType } from '@/types';

interface Props {
  hits: HitsEntityType[];
}

export const Lightbox = ({ hits }: Props) => {
  const lightboxController = useAppSelector(lightboxSelector);
  const sources = hits.map((hit) => hit.largeImageURL);

  return (
    <FsLightbox
      toggler={lightboxController.toggler}
      sources={sources}
      slide={lightboxController.slide}
    />
  );
};
