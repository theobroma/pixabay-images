import { axiosInstance } from '@/shared/api/connection';
import { PicturesDataResponseType } from '@/types';

export const ImagesService = {
  async getAll() {
    const pictureSearch = 'nature';
    const page = 1;
    return axiosInstance.get<PicturesDataResponseType>(
      `/?q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
    );
  },
};
