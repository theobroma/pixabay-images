/* eslint-disable @typescript-eslint/no-explicit-any */
// https://bobbyhadz.com/blog/react-check-if-array-is-empty
export const isExist = <T>(
  value: T | null | undefined,
): value is NonNullable<T> => value !== undefined && value !== null;

export const isString = (value?: any): value is string =>
  typeof value === 'string' && value.length > 0;

export const isNumber = (value?: any): value is number =>
  typeof value === 'number' && !Number.isNaN(value);

export const isEmptyArray = (arr?: any) =>
  Array.isArray(arr) && arr?.length === 0;
