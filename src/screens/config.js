import firebase from "firebase";

export const firebaseconfig = {
  apiKey: "AIzaSyAB6DnRYunnSX2J3PA8dvKPji5Os52Dfoo",
  authDomain: "orramo-fintech.firebaseapp.com",
  projectId: "orramo-fintech",
  storageBucket: "orramo-fintech.appspot.com",
  messagingSenderId: "969938889450",
  appId: "1:969938889450:web:bcefc3ebbaaf70b8c6c593",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseconfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
