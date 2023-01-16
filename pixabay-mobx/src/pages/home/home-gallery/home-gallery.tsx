import { usePicturesSelector } from '@/selectors/pictures/pictures-selector.hook';

export const HomeGallery = () => {
  const [data, isLoading, error] = usePicturesSelector();

  console.log('isLoading :>> ', isLoading);
  console.log('error :>> ', error);
  console.log('data :>> ', data);

  return (
    <div>
      <span>HomeGallery</span>
    </div>
  );
};
