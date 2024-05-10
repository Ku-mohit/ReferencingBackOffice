// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   baseUrl: 'https://preprod-api-gateway.letalliance.dev/api/',   
    //stsServer : 'https://localhost:44361',
   stsServer : 'https://preprod-auth-service.letalliance.dev',
   documentPath : 'https://restservice.letalliance.dev/static/download/',
   operationUrl : 'https://operations.letalliance.dev/dashboard',
   fileTypeValidator : '',
   froalaKey: '2J1B10dC7A5A3A4C3C3cldvbhioffjoC6obH5zH-8mA11C8D6E5B1G4A2F2I3C7=='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
