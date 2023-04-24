import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { SocialProviders, UserDetails } from "./firebaseInterfaces";
import {auth} from "../utils";
import firebase from 'firebase/app';

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
    const {email, password, firstName, lastName, farmType } = data;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // const uid = user.uid;

        // // Add more data to the user in the Realtime Database
        // const databaseRef = firebase.database().ref(``);
        // const userData = { email, firstName, lastName, farmType };
        // databaseRef.set(userData);

        // console.log('User signed up:', user);
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
    return true
  } catch (error) {
    return error;
  }
}

export { LoginnWithEmailAndPassword, SocialLogin, CreateUserAccount };
