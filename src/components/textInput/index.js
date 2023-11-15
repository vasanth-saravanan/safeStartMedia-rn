import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import moment from 'moment';

//styles
import styles from './styles';

//themes
import {BASESTYLES, COLORS} from '../../themes';

function InputText(props) {
  const initialState = {
    inputFocus: false,
    secureTextEntry: true,
  };
  const [localStates, setLocalStates] = useState(initialState);
  const handleLocalStates = (stateName, value) => {
    setLocalStates(prevState => ({...prevState, [stateName]: value}));
  };

  useEffect(() => {
    if (props?.eyeIcon) {
      handleLocalStates('secureTextEntry', true);
    } else {
      handleLocalStates('secureTextEntry', false);
    }
  }, []);

  const {
    placeholder = 'Enter here',
    keyboardType = 'default',
    maxLength = 50,
    autoCapitalize = 'words',
    editable = true,
    onFocus,
    onBlur,
    onSubmitEditing,
    selectTextOnFocus = true,
    title = '',
    required = false,
    tel = null,
    textArea = null,
    value = '',
    autoFocus = false,
    onChangeText = () => {},
    multiLine = false,
    numberOfLines = 1,
    placeholderTextColor = COLORS.grey_1,
    eyeIcon = false,
    searchIcon = false,
    storeSearchIcon = false,
    titleStyle = {},
    textInputFieldHeight = {},
    onFocusColor = true,
    datePicker = false,
    handleDatePicker = () => {},
    backgroudStyle = {},
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={datePicker ? 0.5 : 1}
      onPress={handleDatePicker}>
      {!!title && editable ? (
        <View style={styles.titleContainer}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Text
            style={[styles.title, BASESTYLES.fontAsicsBold(15, COLORS.red_1)]}>
            {required && '*'}
          </Text>
        </View>
      ) : !!title && editable == false ? (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      ) : null}
      <View
        style={
          !editable
            ? [styles.container, BASESTYLES.bgColor(COLORS.grey_3)]
            : [
                styles.container,
                backgroudStyle,
                {
                  borderColor: localStates?.inputFocus
                    ? COLORS.primary
                    : COLORS.grey_2,
                },
              ]
        }>
        {tel && <Text style={[styles.tel]}>+91</Text>}
        {datePicker ? (
          <View
            style={[
              styles.textStyle,
              styles.textInputFieldHeight,
              textInputFieldHeight,
              BASESTYLES.justifyContentCenter,
            ]}>
            {!!value ? (
              <Text style={BASESTYLES.fontAsicsBold(15, COLORS.primary)}>
                {moment(value).format('DD/MM/YYYY')}
              </Text>
            ) : (
              <Text style={BASESTYLES.fontAsicsBold(15, COLORS.grey_1)}>
                {placeholder}
              </Text>
            )}
          </View>
        ) : (
          <TextInput
            style={
              textArea
                ? styles.textArea
                : [
                    !!tel
                      ? [styles.textStyle, BASESTYLES.paddingLeft(0)]
                      : styles.textStyle,
                    BASESTYLES.fontAsicsRegular(15, COLORS.primary),
                    styles.textInputFieldHeight,
                    textInputFieldHeight,
                  ]
            }
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            maxLength={maxLength}
            value={value}
            autoFocus={autoFocus}
            onChangeText={onChangeText}
            multiline={multiLine}
            numberOfLines={numberOfLines}
            autoCapitalize={eyeIcon ? false : autoCapitalize}
            editable={datePicker ? false : editable}
            onFocus={
              onFocusColor
                ? () => {
                    handleLocalStates('inputFocus', true);
                  }
                : onFocus
            }
            onBlur={
              onFocusColor
                ? () => {
                    handleLocalStates('inputFocus', false);
                  }
                : onBlur
            }
            onSubmitEditing={onSubmitEditing}
            selectTextOnFocus={selectTextOnFocus}
            secureTextEntry={localStates.secureTextEntry}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default InputText;
