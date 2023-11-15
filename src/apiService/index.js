import axios from 'axios';

//constants
import {ERROR_HANDLER_TEXT, API_INFO} from '../constants';

function APIKit(url = API_INFO.URL, isMultipart = false) {
  const SERVER_API = url;
  const Kit = axios.create({
    baseURL: SERVER_API,
    timeout: 30000,
  });
  const responseHandler = response => {
    if (response.status === 401) {
      return Promise.reject(error);
    }
    return response;
  };

  const errorHandler = error => {
    if (error.toJSON().message === ERROR_HANDLER_TEXT.networkError) {
    } else if (error.toJSON().message === ERROR_HANDLER_TEXT.statusCode401) {
    } else if (
      error.toJSON().message == 'Request failed with status code 404'
    ) {
      alert(error.toJSON().message);
    }
    console.log(error.toJSON().message, 'errrrrrrrrrrrr');
    return Promise.reject(error);
  };

  Kit.interceptors.request.use(async function (config) {
    if (isMultipart) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  });

  Kit.interceptors.response.use(
    response => responseHandler(response),
    error => errorHandler(error),
  );

  return Kit;
}

export default APIKit;
