import {Platform} from 'react-native';

//======================================//
export const isAndroid = Platform.OS === 'android';
//======================================//
const API_INFO = {
  URL: 'https://jsonplaceholder.typicode.com',
};
//======================================//
const ERROR_HANDLER_TEXT = {
  //common
  networkError: 'Network Error',
  statusCode401: 'Request failed with status code 401',
  currentlyUnavailable: 'Currently Unavailable!',

  //input error
  pleaseEnterPassword: 'Please enter password',
  passwordShouldHave: 'The password should have at least 8 characters.',
  pleaseEnterMobileNo: 'Please enter mobile number',
  pleaseEnterValidMobileNo: 'Please enter valid mobile number',
};
//======================================//

export {ERROR_HANDLER_TEXT, API_INFO};
