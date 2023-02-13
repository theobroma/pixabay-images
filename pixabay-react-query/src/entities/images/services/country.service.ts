import { axiosInstance } from '@/shared/api/connection';

export const ImagesService = {
  async getAll() {
    const pictureSearch = 'nature';
    const page = 1;
    return axiosInstance.get<any>(
      `/?q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
    );
  },
};
