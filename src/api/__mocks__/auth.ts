const response = {
  headers: {
    authorization: '12345',
  },
};

const users = {
  user: {
    email: 'test@123.com',
    password: 'hehe',
  },
};

const axios = {
  post: (url, options) => {
    // get email and password
    const { email, password } = options.user;
    switch (url) {
      case '/users/sign_in':
        return getJWT(email, password);
      default:
        break;
    }
  },
  get: (url, config) => {},
};

const getJWT = function (email, password) {
  if (email === users.user['email'] && password === users.user['password']) {
    return response;
  } else {
    return Error;
  }
};

export default axios;
