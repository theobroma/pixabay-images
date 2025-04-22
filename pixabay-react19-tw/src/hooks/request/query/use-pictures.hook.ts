import { loadPictures } from '@/api/pictures/pictures';
import { useQuery } from '@tanstack/react-query';

import { QueryEnum } from '@/enums/query.enum';

export const usePictures = () => {
  const { data, isLoading } = useQuery({
    queryFn: loadPictures,
    queryKey: [QueryEnum.LoadPictures],
  });

  return {
    data,
    isLoading,
  };
};
