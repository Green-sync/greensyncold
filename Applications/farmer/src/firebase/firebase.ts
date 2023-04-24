/* eslint-disable react-hooks/rules-of-hooks */
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { SocialProviders, UserDetails } from "./firebaseInterfaces";
import {auth} from "../utils";
import { useNavigate } from 'react-router-dom';

// const history = useHistory();

const LoginnWithEmailAndPassword = async (data: UserDetails) => {
  // {email, password, fullname}
  const navigate = useNavigate();
  try {
    const { email, password } = data;
    const user = await signInWithEmailAndPassword(auth, email, password);
    if(user){
    navigate('/dashboard');
    }
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// union type
const SocialLogin = async (provider: SocialProviders) => {
  // TODO: implement this method
  const navigate = useNavigate();
  const providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
  }
  const user = await signInWithPopup(auth, providers[provider as SocialProviders]);
  if (user) {
    navigate('/dashboard')
  }
};

const CreateUserAccount = async (data: UserDetails) => {
  const navigate = useNavigate();
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
        navigate("/dashboard")
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
    return true
  } catch (error) {
    navigate("*")
    alert("Error signing up")
    return error;
  }
}

export { LoginnWithEmailAndPassword, SocialLogin, CreateUserAccount };
