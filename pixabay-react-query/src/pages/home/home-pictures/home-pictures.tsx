import { useCountries } from '@/entities/images/hooks/useCountries';

export const HomePictures = () => {
  const { isLoading, countries } = useCountries();
  console.log('countries :>> ', countries);

  return (
    <div>
      <span>sdfsdf</span>
    </div>
  );
};
