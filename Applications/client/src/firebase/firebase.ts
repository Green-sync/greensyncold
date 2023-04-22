import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

const auth = getAuth();

const LoginnWithEmailAndPassword = async (data: any) => {
  // {email, password, fullname}
  try {
    const { email, password } = data;
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    return false;
  }
};
const RegisterWithEmailAndPassword = async (data: any) => {
  // {email, password, fullname}
  try {
    const { email, password } = data;
    const userRef = await createUserWithEmailAndPassword(auth, email, password);
    // userRef.
    return true;
  } catch (error) {
    return false;
  }
};
// union type
const SocialLogin = async (provider: SocialProviders) => {
  // TODO: implement this method
  // await signInWithPopup();
};

export { LoginnWithEmailAndPassword, RegisterWithEmailAndPassword };
