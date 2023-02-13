import { ImageList } from '@mui/material';

import { HitsEntityType } from '@/types';

import { ImageGalleryItem } from './image-gallery-item/image-gallery-item';

interface Props {
  hits: HitsEntityType[];
}

export const ImageGallery = ({ hits = [] }: Props) => (
  <ImageList cols={5} rowHeight={164}>
    {hits.map((hit) => (
      <ImageGalleryItem hit={hit} key={hit.id} />
    ))}
  </ImageList>
);
