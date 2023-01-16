import { LanguageEnum } from '@/enums/language.enum';
import { BaseOptionInterface } from '@/types';

export const languageMenuOptions: BaseOptionInterface[] = [
  {
    value: LanguageEnum.EN,
    label: 'English',
  },
  {
    value: LanguageEnum.UK,
    label: 'Українська',
  },
];
