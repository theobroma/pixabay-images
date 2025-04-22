import { usePictures } from '@/hooks/request/query/use-pictures.hook';

export const MainPage = () => {
  const { data, isLoading } = usePictures();
  console.log('🚀 ~ MainPage ~ data:', data);
  console.log('🚀 ~ MainPage ~ isLoading:', isLoading);

  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-700 underline">Hello world!</h1>
    </div>
  );
};
