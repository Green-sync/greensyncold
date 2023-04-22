import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { SocialProviders, UserDetails } from "./firebaseInterfaces";
import {auth} from "../utils";

// const auth = getAuth();

const LoginnWithEmailAndPassword = async (data: UserDetails, auth: any) => {
  // {email, password, fullname}
  try {
    const { email, password } = data;
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    return error;
  }
};
const RegisterWithEmailAndPassword = async (data: UserDetails, auth: any) => {
  // {email, password, fullname}
  try {
    const { email, password } = data;
    const userRef = await createUserWithEmailAndPassword(auth, email, password);
    // userRef.
    console.log(userRef)
    return true;
  } catch (error) {
    return false;
  }
};
// union type
const SocialLogin = async (provider: SocialProviders,auth:any) => {
  // TODO: implement this method
  const providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
  }
  await signInWithPopup(auth, providers[provider as SocialProviders]);
};

const CreateUserAccount = async (data: UserDetails) => {
  try {
    const {email, password} = data;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      console.log("Created")
    return true
  } catch (error) {
    return error;
  }
}

export { LoginnWithEmailAndPassword, RegisterWithEmailAndPassword, SocialLogin, CreateUserAccount };
