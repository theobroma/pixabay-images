import { connectionClient } from '@/api/connection';
import { fromError } from 'zod-validation-error';

import { PicturesResponseSchema, PicturesResponseType } from './pictures.schemas';

const pictureSearch = 'nature';
const page = 1;

export const loadPictures = async () => {
  const { data } = await connectionClient.get<PicturesResponseType>(
    `/?q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
  );

  try {
    PicturesResponseSchema.parse(data);
  } catch (err) {
    const validationError = fromError(err);
    console.log(validationError.toString());
  }

  return data;
};
