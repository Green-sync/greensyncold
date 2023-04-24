/* eslint-disable react-hooks/rules-of-hooks */
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { SocialProviders, UserDetails } from "./firebaseInterfaces";
import {auth} from "../utils";

// const history = useHistory();

const LoginnWithEmailAndPassword = async (data: UserDetails) => {
  // {email, password, fullname}
  try {
    const { email, password } = data;
    await signInWithEmailAndPassword(auth, email, password);
    return true
  } catch (error) {
    console.log(error);
    return error;
  }
};

// union type
const SocialLogin = async (provider: SocialProviders) => {
  // TODO: implement this method
  const providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
  }
  try {
    await signInWithPopup(auth, providers[provider as SocialProviders]);
    return true;
  } catch(error) {
    return false
  }
 
};

const CreateUserAccount = async (data: UserDetails) => {
  try {
    const {email, password, firstName, lastName, farmType } = data;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
         updateProfile(user, {
          displayName: firstName,
          // lastName: lastName,
          // farmingType: farmType
        })
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
    return true
  } catch (error) {
    alert("Error signing up")
    return false;
  }
}

export { LoginnWithEmailAndPassword, SocialLogin, CreateUserAccount };
