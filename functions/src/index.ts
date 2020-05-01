import { https } from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const helloWorld = https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

export default {
  helloWorld,
};
