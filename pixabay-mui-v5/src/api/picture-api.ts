import { pixabayAxiosInstance } from './api';

export const pictureAPI = {
  fetchImages(pictureSearch: string, page: number) {
    return pixabayAxiosInstance.get<any>(
      `/?q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
    );
  },
};
