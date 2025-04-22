import { usePictures } from '@/hooks/request/query/use-pictures.hook';

import { ImageCard } from './image-card/image-card';

export const MainPage = () => {
  const { data, isLoading } = usePictures();

  return (
    <div>
      {isLoading ? (
        <h1 className="mx-auto mt-32 text-center text-6xl">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {data?.hits.map((hit) => <ImageCard key={hit.id} hit={hit} />)}
        </div>
      )}
    </div>
  );
};
