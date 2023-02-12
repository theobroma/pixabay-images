// usefull for delay in thunk creators
export const waitForMe = (milisec: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, milisec);
  });
