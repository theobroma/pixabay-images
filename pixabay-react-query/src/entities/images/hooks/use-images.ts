import { useQuery } from '@tanstack/react-query';

import { ImagesService } from '@/entities/images/services/images.service';

export const useImages = () => {
  const { isLoading, data: images } = useQuery({
    queryKey: ['images'],
    queryFn: () => ImagesService.getAll(),
  });

  return { isLoading, images };
};
