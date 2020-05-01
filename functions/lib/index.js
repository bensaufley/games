"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_functions_1 = require("firebase-functions");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const helloWorld = firebase_functions_1.https.onRequest((request, response) => {
    response.send('Hello from Firebase!');
});
exports.default = {
    helloWorld,
};
//# sourceMappingURL=index.js.map