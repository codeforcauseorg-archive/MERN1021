import firebaseApp from 'firebase/compat/app';

// Configure Firebase.
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWB9_RFQaTQOygd8QvBDvpR8NpqN1tTm8",
    authDomain: "cfcmern1021.firebaseapp.com",
    projectId: "cfcmern1021",
    storageBucket: "cfcmern1021.appspot.com",
    messagingSenderId: "402554322456",
    appId: "1:402554322456:web:cfe8a7bfee705d106b4d6d"
  };

firebaseApp.initializeApp(firebaseConfig);

export default firebaseApp;