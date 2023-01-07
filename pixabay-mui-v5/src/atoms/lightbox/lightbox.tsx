import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

import { HitsEntityType } from '@/types';

interface Props {
  hits: HitsEntityType[];
}

export const Lightbox = ({ hits }: Props) => {
  // To open the lightbox change the value of the "toggler" prop.
  const [isToggler, setToggler] = useState(false);

  const sources = hits.map((hit) => hit.largeImageURL);

  return (
    <>
      <button type="button" onClick={() => setToggler(!isToggler)}>
        Toggle Lightbox
      </button>
      <FsLightbox toggler={isToggler} sources={sources} />
    </>
  );
};
