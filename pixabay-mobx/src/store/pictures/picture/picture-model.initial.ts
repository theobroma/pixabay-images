import { Instance } from 'mobx-state-tree';

import { UserModel } from './picture.model';

export const initialUserModel: Instance<typeof UserModel> = {
  id: '',
};
