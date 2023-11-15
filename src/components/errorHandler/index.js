import React from 'react';
import {Text} from 'react-native';

//styles
import {BASESTYLES, COLORS} from '../../themes';

//custom functions
import {dymanicMessage, isNullorUndefined} from '../../utils/utility';

const ErrorHandler = ({
  mobile,
  email,
  pincode,
  address,
  landmark,
  name,
  password,
  state,
  checker,
  text,
  checkBox,
  type,
  otp,
}) => {
  return (
    <>
      {mobile ||
      email ||
      pincode ||
      address ||
      landmark ||
      name ||
      password ||
      otp ? (
        <>
          {Object.keys(state).length !== 0 ? (
            <Text
              style={[
                BASESTYLES.fontAsicsRegular(13, COLORS.red_1),
                BASESTYLES.marginTop(1),
              ]}>
              {text}
            </Text>
          ) : null}
        </>
      ) : !checkBox ? (
        <>
          {isNullorUndefined(state) && checker ? (
            <Text
              style={[
                BASESTYLES.fontAsicsRegular(13, COLORS.red_1),
                BASESTYLES.marginTop(1),
              ]}>
              {dymanicMessage(type, text)}
            </Text>
          ) : null}
        </>
      ) : (
        <>
          {isNullorUndefined(state) && checker ? (
            <Text style={[BASESTYLES.fontAsicsRegular(13, COLORS.red_1)]}>
              {dymanicMessage(type, text)}
            </Text>
          ) : null}
        </>
      )}
    </>
  );
};

export default ErrorHandler;
