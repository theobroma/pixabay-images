import { axiosInstance } from './connection';

export const loadUser = async () => {
  const { data } = await axiosInstance.get<any>(
    `/?q=flower&image_type=photo&orientation=horizontal&per_page=12&page=1`,
  );
  return data;
};
