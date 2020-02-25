// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  isServer: true,
  rootproto:"https://",
  rootip:"staging.ludiino.com",
  rootpath:"/",
  socketPath:'/socket',
  socketPort:null,
  port:null,
  merchantpath:"http://45.77.250.47:84",
  redirectTime:15
};
