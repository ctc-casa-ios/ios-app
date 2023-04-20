const response = {
  data: {
    token: '12345',
  },
};

const users = {
  email: 'test@123.com',
  password: 'hehe',
};

const axios = {
  post: (url, options) => {
    // get email and password
    const { email, password } = options;
    switch (url) {
      case '/signin':
        return getJWT(email, password);
      default:
        break;
    }
  },
};

const getJWT = function (email, password) {
  if (email === users.email && password === users.password) {
    return response;
  } else {
    return Error;
  }
};

export default axios;
