import { SnapshotOrInstance, types } from 'mobx-state-tree';

// import { initialUserStore } from './pictures.initial';

// import { UserModel } from './user-model/user.model';
// import { initialUserStore } from './user.initial';

export const UserStore = types.model('User', {
  //   data: UserModel,
  isLoading: types.boolean,
  error: types.maybeNull(types.string),
});

export type SnapshotOrInstanceUserStore = SnapshotOrInstance<typeof UserStore>;

export const getInitialUserStore = () => UserStore.create(initialUserStore);

export const initialUserStore: SnapshotOrInstance<typeof UserStore> = {
  isLoading: false,
  error: null,
  //   data: initialUserModel,
};
