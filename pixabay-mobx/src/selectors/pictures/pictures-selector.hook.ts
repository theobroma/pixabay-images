import { Instance } from 'mobx-state-tree';

import { useStore } from '@/hooks/store/user-store.hook';
import { UserModel } from '@/store/pictures/picture/picture.model';
// import { useStore } from '@/hook/store/user-store.hook';
// import { UserModel } from '@/store/user/user-model/user.model';

export const usePicturesSelector = (): any =>
  // [
  //   Instance<typeof UserModel>,
  //   boolean,
  //   string | null,
  // ]

  {
    const { data, isLoading, error } = useStore().user;

    return [data, isLoading, error];
  };
