import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import { toast } from './toast';

const config = {
  apiKey: "AIzaSyBiJkSLcWkbsTV2czTowoD8dM9poCEDuGs",
  authDomain: "round-fusion-257105.firebaseapp.com",
  projectId: "round-fusion-257105",
  storageBucket: "round-fusion-257105.appspot.com",
  messagingSenderId: "940678514051",
  appId: "1:940678514051:web:5386000d23803664a562b6",
  measurementId: "G-13ZHNNYW6C"
}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string) {
  const email = `${username}@test.com`;
  try {
    const res = await firebaseAuth.signInWithEmailAndPassword(firebaseAuth.getAuth(), email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function registerUser(username: string, password: string) {
  const email = `${username}@test.com`;
  try {
    const res = await firebaseAuth.createUserWithEmailAndPassword(firebaseAuth.getAuth(), email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}