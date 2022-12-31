import { ColorEnum } from '@/enums/color.enum';

export interface BaseOptionInterface<T = string> {
  value: T;
  label: string;
}

export interface ThemeOptionInterface extends BaseOptionInterface {
  iconColor: ColorEnum;
}
