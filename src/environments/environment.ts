// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
     baseUrl: 'https://localhost:44379/api/',  
  
    //baseUrl: 'https://api-gateway.letalliance.dev/api/',
    stsServer : 'https://auth-service.letalliance.dev',
  
    // baseUrl: 'https://api-gateway.techub.dev/api/',     
    //  stsServer : 'https://resources.techub.dev',
  
     operationUrl : 'https://operations.letalliance.dev/dashboard',
     isShowTenantBDXButton : true
     
  };
  
  /*
   * In development mode, to ignore zone related error stack frames such as
   * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
   * import the following file, but please comment it out in production mode
   * because it will have performance impact when throw error
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  
  
  
  
  
  