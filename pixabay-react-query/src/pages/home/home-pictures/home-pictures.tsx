import { useImages } from '@/entities/images/hooks/use-images';
import { ImageGallery } from '@/entities/images/ui/image-gallery/image-gallery';

export const HomePictures = () => {
  const { isLoading, images } = useImages();
  // console.log('countries :>> ', countries);

  return <div>{images && <ImageGallery hits={images.data.hits} />}</div>;
};
