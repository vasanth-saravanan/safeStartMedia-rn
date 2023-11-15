import {ERROR_HANDLER_TEXT, STRINGS} from '../constants';
import {getCommonStates} from '../redux/selectors';

//check null or undefined
export function isNullorUndefined(value) {
  if (!value || value == null || value == undefined) {
    return true;
  } else {
    return false;
  }
}

//first letter capital
export const getSentenceCase = data => {
  if (data) {
    return data?.charAt(0).toUpperCase() + data?.slice(1).toLowerCase();
  } else {
    return data;
  }
};

//update sensitive data using keychain
export async function updateKeychain(key, value) {
  let keyData = await retrieveDataFromKeychain();
  if (keyData == null || keyData == undefined) {
    keyData = {};
  }
  keyData[`${key}`] = value;
  await storeInKeychain(keyData);
}

//dropdown array formatter
export function dropdownArrayFormatter(dataList, label, value) {
  return dataList.map((data, index) => {
    let obj = {};
    obj.label = data[label];
    obj.value = data[value];

    return obj;
  });
}

//disply dynamic message for error hanlder
export function dymanicMessage(type, value) {
  let message = value;
  switch (type) {
    case 1:
      message = `Please enter ${value}`;
      break;
    case 2:
      message = `Invalid ${value}`;
      break;
    case 3:
      message = `Please select ${value}`;
      break;
    case 4:
      message = `Please accept the ${value}`;
      break;
    default:
      message;
  }
  return message;
}

//name format checker
export function nameValidation(data, errorMsg = '') {
  let errors = {};
  if (!data) {
    errors = {
      error: !isNullorUndefined(errorMsg) ? errorMsg : 'Please enter name',
    };
  } else if (data && data.length < 3) {
    errors = {error: 'Please enter atleast 3 characters'};
  }
  return {errors: errors};
}

//password format checker
export function passwordValidation(data, errorMsg = '') {
  let errors = {};
  if (!data) {
    errors = {
      error: !isNullorUndefined(errorMsg)
        ? errorMsg
        : ERROR_HANDLER_TEXT.pleaseEnterPassword,
    };
  } else if (data && data.length < 8) {
    errors = {error: ERROR_HANDLER_TEXT.passwordShouldHave};
  }
  return {errors: errors};
}

//mobile format checker
export function mobileNumberValidation(mobile) {
  let errors = {};
  let isValid = true;

  if (!mobile) {
    isValid = false;
    errors['mobile'] = ERROR_HANDLER_TEXT.pleaseEnterMobileNo;
  } else if (typeof mobile !== 'undefined') {
    var pattern = new RegExp(/^[1-9]{1}[0-9]{9}$/);
    if (mobile.length < 8 || mobile.length > 11) {
      isValid = false;
      errors['mobile'] = ERROR_HANDLER_TEXT.pleaseEnterValidMobileNo;
    }
  }
  return {isValid: isValid, errors: errors};
}

//email format checker
export function emailValidation(data, formatOnly = false, errorText = '') {
  let errors = {};
  let isValid = true;

  if (!data) {
    if (!formatOnly) {
      isValid = false;
      if (errorText) {
        errors['email'] = errorText;
      } else {
        errors['email'] = 'Please enter email';
      }
    }
  } else if (typeof data !== 'undefined') {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!pattern.test(data)) {
      isValid = false;
      errors['email'] = 'Please enter valid email';
    }
  }
  return {isValid: isValid, errors: errors};
}

//alphabet with space checker
export function alphabetWithSpaceValidation(value) {
  if (/^[A-Za-z" "]+$/.test(value) || value === '') {
    return true;
  } else {
    return false;
  }
}

//alphabet checker
export function alphabetValidation(value) {
  if (/^[A-Za-z]+$/.test(value) || value === '') {
    return true;
  } else {
    return false;
  }
}

//number with space checker
export function numberWithSpaceValidation(value) {
  if (/^[0-9" "]+$/.test(value) || value === '') {
    return true;
  } else {
    return false;
  }
}

//only number checker
export function numberWithoutSpaceValidation(value) {
  if (/^[0-9]+$/.test(value) || value === '') {
    return true;
  } else {
    return false;
  }
}

//spl char checker
export function noSplCharValidation(value) {
  if (/^[A-Za-z0-9,." "]+$/.test(value) || value === '') {
    return true;
  } else {
    return false;
  }
}
