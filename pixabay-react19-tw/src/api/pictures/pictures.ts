import { connectionClient } from '@/api/connection';

import { PicturesDataResponseType } from './pictures.schemas';

const pictureSearch = 'nature';
const page = 1;

export const loadPictures = async () => {
  const { data } = await connectionClient.get<PicturesDataResponseType>(
    `/?q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
  );

  return data;
};
