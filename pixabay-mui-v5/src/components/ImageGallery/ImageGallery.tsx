import ImageList from '@mui/material/ImageList';

import { HitsEntityType } from '@/types';

import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

interface Props {
  hits: HitsEntityType[];
}

export const ImageGallery = ({ hits = [] }: Props) => (
  <ImageList cols={5} rowHeight={164}>
    {hits.map((hit) => (
      <ImageGalleryItem hit={hit} />
    ))}
  </ImageList>
);
