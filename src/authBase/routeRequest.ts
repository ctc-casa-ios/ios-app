import authApi from './auth';

const routeRequest = async (route, payload) => {
  try {
    const response = await authApi.post(route, payload);

    console.log(response.headers.toJSON());
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);

    return response.data;
  } catch (err) {
    console.error('Error:', err.response);

    return 'Request Error: Unable to retrieve response data.';
  }
};

export default routeRequest;
