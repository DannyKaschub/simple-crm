// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
    production: false,
  firebase: {
    apiKey: 'AIzaSyBJmNolY3EUVH46BeGxFc8JHJhYX4Je05U',
    authDomain: 'simple-crm-6016d.firebaseapp.com',
    databaseURL: '<your-database-URL>',
    projectId: 'simple-crm-6016d',
    storageBucket: 'simple-crm-6016d.appspot.com',
    messagingSenderId: '554491491600',
    appId: '1:554491491600:web:c8dfdb2cd90ce2afbfe195',
    measurementId: '<your-measurement-id>'
  }
    /*
    ngxAuthfirebaseUIConfig:  {
      enableFirestoreSync: true, // enable/disable autosync users with firestore
      toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
      toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
      authGuardFallbackURL: '/login', // url for unauthenticated users - to use in combination with canActivate feature on a route
      authGuardLoggedInURL: '/', // url for authenticated users - to use in combination with canActivate feature on a route
      passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
      passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
      // Same as password but for the name
      nameMaxLength: 50,
      nameMinLength: 2,
      // If set, sign-in/up form is not available until email has been verified.
      // Plus protected routes are still protected even though user is connected.
      guardProtectedRoutesUntilEmailIsVerified: false,
      enableEmailVerification: true, // default: true
    }
    */
  };
  
  
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.