import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//redux
import {useDispatch} from 'react-redux';
import {
  updateInitialRouteName,
  updateUserDetails,
} from '../../redux/slices/commonSlice';

//styles and themes
import {BASESTYLES, COLORS} from '../../themes';
import styles from './styles';

//constant
import {ScreenName} from '../../routes/screenName';

//custom function
import {
  emailValidation,
  isNullorUndefined,
  passwordValidation,
} from '../../utils/utility';

//custom components
import CustomSafeArea from '../../components/customSafeArea';
import Button from '../../components/button';
import TextInputComp from '../../components/textInput';
import ErrorHandler from '../../components/errorHandler';
import navigationService from '../../routes/navigationService';

const Signin = props => {
  const dispatch = useDispatch();
  const initialState = {
    email: '',
    emailError: {},
    password: '',
    passwordError: {},
    isBtnClicked: false,
  };
  const [localStates, setLocalStates] = useState(initialState);
  const handleLocalStates = (stateName, value) => {
    setLocalStates(prevState => ({...prevState, [stateName]: value}));
  };

  //email validation
  const handleEmailValidation = email => {
    let result = emailValidation(email);
    if (result?.isValid) {
      handleLocalStates('emailError', {});
    } else {
      handleLocalStates('emailError', result?.errors);
    }
  };

  //password validation
  const handlePasswordValidation = name => {
    let result = passwordValidation(name);
    if (result?.isValid) {
      handleLocalStates('passwordError', {});
    } else {
      handleLocalStates('passwordError', result?.errors);
    }
  };

  //login
  const login = () => {
    handleLocalStates('isBtnClicked', true);
    handleEmailValidation(localStates?.email);
    handlePasswordValidation(localStates?.password);

    if (
      Object.keys(localStates?.emailError).length == 0 &&
      !isNullorUndefined(localStates?.email) &&
      Object.keys(localStates?.passwordError).length == 0 &&
      !isNullorUndefined(localStates?.password)
    ) {
      handleLocalStates('isBtnClicked', false);
      dispatch(updateInitialRouteName(ScreenName.dashBoard));
      dispatch(
        updateUserDetails({
          email: localStates?.email,
          password: localStates?.password,
        }),
      );
      navigationService.navigateAndReset(ScreenName.dashBoard);
    }
  };
  return (
    <CustomSafeArea backgroundColor={COLORS.white_1}>
      <KeyboardAwareScrollView
        style={BASESTYLES.bgColor(COLORS.white_1)}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.rootContainer}>
          <View style={BASESTYLES.spacer(5)} />
          <Text style={BASESTYLES.fontAsicsBold(15, COLORS.primary)}>
            SAFE START MEDIA
          </Text>
          <View style={BASESTYLES.spacer(2)} />
          <Text style={styles.title}>Log In</Text>
          <View style={BASESTYLES.spacer(3)} />

          <View style={styles.textInputContainer}>
            <TextInputComp
              keyboardType="email-address"
              maxLength={100}
              title="Email"
              required={true}
              value={localStates?.email}
              onChangeText={value => {
                handleLocalStates('email', value);
                handleEmailValidation(value);
              }}
            />
            <ErrorHandler
              email
              state={localStates?.emailError}
              checker={localStates?.isBtnClicked}
              type={1}
              text={localStates?.emailError?.email}
            />
            <View style={BASESTYLES.spacer(0.5)} />
            <TextInputComp
              maxLength={100}
              title="Password"
              required={true}
              value={localStates?.password}
              onChangeText={value => {
                handleLocalStates('password', value);
                handlePasswordValidation(value);
              }}
              eyeIcon={true}
            />
            <ErrorHandler
              password
              state={localStates?.passwordError}
              checker={localStates?.isBtnClicked}
              type={1}
              text={localStates?.passwordError?.error}
            />
          </View>
          <View style={BASESTYLES.spacer(2)} />
          <Button
            containerStyle={styles.btn(COLORS.blue_1)}
            textStyle={BASESTYLES.fontAsicsBold(15, COLORS.white_1)}
            text={'Log In'}
            onPress={() => login()}
          />
          <View style={BASESTYLES.spacer(5)} />
        </View>
      </KeyboardAwareScrollView>
    </CustomSafeArea>
  );
};

export default Signin;
