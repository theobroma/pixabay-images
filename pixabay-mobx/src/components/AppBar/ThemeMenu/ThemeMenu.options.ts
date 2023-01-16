import { BaseOptionInterface, ThemeColorsEnum } from '@/types';

export const themeOptions: BaseOptionInterface[] = [
  {
    value: ThemeColorsEnum.LIGHT,
    label: 'Light',
  },
  {
    value: ThemeColorsEnum.DARK,
    label: 'Dark',
  },
  {
    value: ThemeColorsEnum.DEEP_PURPLE_AMBER,
    label: 'Deep Purple Amber',
  },
  {
    value: ThemeColorsEnum.PINK_BLUE_GREY_THEME,
    label: 'Pink Blue Grey',
  },
];
