import { AppSearch } from '@/components/AppSearch/AppSearch';
import { useAppDispatch } from '@/store/configureStore';
import { setPictureSearchAC } from '@/store/pictures/slice';

export const RtqkSearch = () => {
  const dispatch = useAppDispatch();

  const handleEnterPress = (value: string) => {
    console.log('RtqkSearch handleEnterPress :>> ', value);
    dispatch(setPictureSearchAC(value));
  };

  return <AppSearch onEnterPress={handleEnterPress} />;
};
