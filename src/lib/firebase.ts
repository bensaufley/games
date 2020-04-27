import 'firebase/auth';
import 'firebase/firestore';

import app from 'firebase/app';

import googleServicesJSON from '../../google-services.json';

const firebase = app.initializeApp(googleServicesJSON);

export default firebase;
