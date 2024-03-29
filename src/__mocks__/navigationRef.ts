// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
export const setNavigator = (nav: object) => {
  console.log('set navigator');
};

export const navigate = (routeName: string, params: object) => {
  console.log('navigate');
};
