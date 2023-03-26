import { firebaseApp } from ".";

const sayHello = (msg: string) => {
  console.log(msg);
  return msg;
};

const firebaseFun = async (uid: string) => {
  return await firebaseApp.auth().createCustomToken(uid);
};
export const someClient = {
  method: sayHello,
  f: firebaseFun,
};
