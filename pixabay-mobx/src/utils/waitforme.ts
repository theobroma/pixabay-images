// usefull for delay in thunk creators
export function waitForMe(milisec: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, milisec);
  });
}
