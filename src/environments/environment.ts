// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "@angular/fire/app";
import { initializeAuth } from "@firebase/auth";

export const environment = {
  firebase: {
    projectId: 'diet-tracker-2deb3',
    appId: '1:117864823232:web:44e327d87ca203b5ea7025',
    storageBucket: 'diet-tracker-2deb3.appspot.com',
    apiKey: 'AIzaSyAyuGE84N69blennB61rxywaX0dhNK8vis',
    authDomain: 'diet-tracker-2deb3.firebaseapp.com',
    messagingSenderId: '117864823232',
    measurementId: 'G-FRY7D47G5X',
  },
  production: false
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
