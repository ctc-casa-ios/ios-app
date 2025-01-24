// Helper Functions: Authentication

import authApi from 'src/authBase/auth';

const signin = async (email, password) => {

    try {
      const response = await authApi.post('/api/v1/users/sign_in', {
        email,
        password,
      });

      console.log(response.headers.toJSON());
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.data);

      return true;
    } catch (err) {
      console.error('Error:', err.response);

      return false;
    }
};

export default signin;
