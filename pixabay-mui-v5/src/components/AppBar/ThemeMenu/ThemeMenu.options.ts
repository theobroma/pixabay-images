import { ThemeEnum } from '@/enums/theme.enum';
import { BaseOptionInterface } from '@/types';

export const themeOptions: BaseOptionInterface[] = [
  {
    value: ThemeEnum.Light,
    label: 'Light',
  },
  {
    value: ThemeEnum.Dark,
    label: 'Dark',
  },
  {
    value: ThemeEnum.DeepPurpleAmber,
    label: 'Deep Purple Amber',
  },
  {
    value: ThemeEnum.PinkBlueGreyTheme,
    label: 'Pink Blue Grey',
  },
];
