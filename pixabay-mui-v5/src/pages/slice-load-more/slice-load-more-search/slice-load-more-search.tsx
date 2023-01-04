import { AppSearch } from '@/components/AppSearch/AppSearch';
import { useAppDispatch } from '@/store/configureStore';
import { getPicturesTC, setPictureSearchAC } from '@/store/pictures/slice';

export const SliceLoadMoreSearch = () => {
  const dispatch = useAppDispatch();
  const handleEnterPress = (value: string) => {
    // console.log('handleEnterPress :>> ', value);
    dispatch(setPictureSearchAC(value));
    dispatch(getPicturesTC({ page: 1 }));
  };

  return <AppSearch onEnterPress={handleEnterPress} />;
};
