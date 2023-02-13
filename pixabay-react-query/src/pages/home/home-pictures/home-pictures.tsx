import { useCountries } from '@/entities/images/hooks/useCountries';
import { ImageGallery } from '@/entities/images/ui/image-gallery/image-gallery';

export const HomePictures = () => {
  const { isLoading, countries } = useCountries();
  // console.log('countries :>> ', countries);

  return (
    <div>
      <span>sdfsdf</span>
      {countries && <ImageGallery hits={countries.data.hits} />}
    </div>
  );
};
