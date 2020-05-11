// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    isServer: false,
    
    // for prerender
  
    // host: 'http://localhost:4000',
    // rootproto:"http://",
    // rootip:"localhost",
    // rootpath:"/",
    // socketPath:'/socket',
    // socketPort:9992,
    // port:8080,
    // merchantpath:"http://45.77.250.47:84",
    // redirectTime:15
  
    rootproto: 'https://',
    rootip: 'dev.ludiino.com',
    rootpath: '/',
    socketPath: '/socket',
    socketPort: null,
    port: null,
    merchantPath: 'http://45.77.250.47:84',
    redirectTime: 20
  };
