import { useQuery } from '@tanstack/react-query';

import { ImagesService } from '@/entities/images/services/country.service';

export const useCountries = () => {
  const { isLoading, data: countries } = useQuery({
    queryKey: ['images'],
    queryFn: () => ImagesService.getAll(),
  });

  return { isLoading, countries };
};
