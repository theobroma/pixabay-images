import { SnapshotOrInstance, flow, types } from 'mobx-state-tree';

import { loadUser } from '@/api/pictures.api';

// import { initialUserStore } from './pictures.initial';

// import { UserModel } from './user-model/user.model';
// import { initialUserStore } from './user.initial';

export const UserStore = types
  .model('User', {
    //   data: UserModel,
    data: types.array(types.string),
    isLoading: types.boolean,
    error: types.maybeNull(types.string),
  })
  .actions((self) => ({
    // eslint-disable-next-line no-return-assign
    setData: (user: any) => (self.data = user),
    // eslint-disable-next-line no-return-assign
    setError: (error: string) => (self.error = error),
    // eslint-disable-next-line no-return-assign
    setLoading: (isLoading: boolean) => (self.isLoading = isLoading),
  }))
  .actions((self) => ({
    loadUser: flow(function* () {
      self.setLoading(true);

      try {
        const user: any = yield loadUser();
        console.log('user :>> ', user);

        self.setData(user);
      } catch (error: any) {
        self.setError(error);
      } finally {
        self.setLoading(false);
      }
    }),
  }));

export type SnapshotOrInstanceUserStore = SnapshotOrInstance<typeof UserStore>;

export const getInitialUserStore = () => UserStore.create(initialUserStore);

export const initialUserStore: SnapshotOrInstance<typeof UserStore> = {
  isLoading: false,
  error: null,
  //   data: initialUserModel,
  data: [],
};
