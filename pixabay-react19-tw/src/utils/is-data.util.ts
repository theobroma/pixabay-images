/* eslint-disable @typescript-eslint/no-explicit-any */
export const isExist = <T>(value: T | null | undefined): value is NonNullable<T> =>
  value !== undefined && value !== null;

export const isString = (value?: any): value is string => typeof value === 'string' && value.length > 0;

export const isNumber = (value?: any): value is number => typeof value === 'number' && !Number.isNaN(value);

export const isFile = (value?: any): value is File => value instanceof File;

export const isDate = (value?: any): value is Date => value instanceof Date;

export const isObjectEmpty = (object: object): boolean => Object.values(object).length === 0;
