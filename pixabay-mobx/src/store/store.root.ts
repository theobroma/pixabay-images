import makeInspectable from 'mobx-devtools-mst';
import { types } from 'mobx-state-tree';

import { UserStore, getInitialUserStore } from './pictures/pictures.store';

// import { getInitialUserStore, UserStore } from './user/user.store';

const StoreRoot = types.model('RootStore', {
  user: UserStore,
});

export const rootStore = StoreRoot.create({
  user: getInitialUserStore(),
});

makeInspectable(rootStore);
