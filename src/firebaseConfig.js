import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {getStoreage} from 'forebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBcZsvBCvXXHztl9k0eD-TkJQ5fLIxRGLA",
    authDomain: "digital-agency-f147d.firebaseapp.com",
    databaseURL: "https://digital-agency-f147d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "digital-agency-f147d",
    storageBucket: "digital-agency-f147d.appspot.com",
    messagingSenderId: "934327865481",
    appId: "1:934327865481:web:32d928b120e5e9747bb658"
  };

  const app = initializeApp(firebaseConfig)

  export const storage = getStorage(app);
  export const db = getFirestore(app);