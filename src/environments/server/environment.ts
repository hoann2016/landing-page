// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  isServer: true,
  // for prerender
  host: 'http://localhost:4000',
  rootproto:"http://",
  rootip:"dev.ludiino.com",
  rootpath:"/",
  port:null,
  merchantpath:"http://45.77.250.47:84"
};
