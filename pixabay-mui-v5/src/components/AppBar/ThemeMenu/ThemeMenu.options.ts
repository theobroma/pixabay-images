import { ColorEnum } from '@/enums/color.enum';
import { ThemeOptionInterface, ThemeColorsEnum } from '@/types';

export const themeOptions: ThemeOptionInterface[] = [
  {
    value: ThemeColorsEnum.LIGHT,
    label: 'Light',
    iconColor: ColorEnum.LightPrimaryMain,
  },
  {
    value: ThemeColorsEnum.DARK,
    label: 'Dark',
    iconColor: ColorEnum.DarkPrimaryMain,
  },
  {
    value: ThemeColorsEnum.DEEP_PURPLE_AMBER,
    label: 'Deep Purple Amber',
    iconColor: ColorEnum.DeepPurplePrimaryMain,
  },
  {
    value: ThemeColorsEnum.PINK_BLUE_GREY_THEME,
    label: 'Pink Blue Grey',
    iconColor: ColorEnum.PinkBluePrimaryMain,
  },
];
