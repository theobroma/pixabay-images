import { AppSearch } from '@/components/AppSearch/AppSearch';

export const RtqkSearch = () => {
  //   const dispatch = useAppDispatch();

  const handleEnterPress = (value: string) => {
    console.log('RtqkSearch handleEnterPress :>> ', value);
  };

  return <AppSearch onEnterPress={handleEnterPress} />;
};
