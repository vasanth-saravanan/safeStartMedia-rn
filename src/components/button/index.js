import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

//styles
import styles from './styles';

//themes
import {BASESTYLES, COLORS} from '../../themes';

export default function Button({
  text,
  onPress,
  containerStyle = {},
  textStyle = {},
  outline = false,
  touchable = true,
  disabled = false,
  logo = false,
}) {
  return touchable ? (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.5}
      style={
        outline
          ? [
              styles.outlineContainer,
              containerStyle,
              disabled && BASESTYLES.bgColor(COLORS.grey_1),
            ]
          : [
              styles.container,
              containerStyle,
              disabled && BASESTYLES.bgColor(COLORS.grey_1),
            ]
      }
      onPress={onPress}
      disabled={disabled}>
      {logo && logo}
      <Text
        numberOfLines={1}
        style={
          outline
            ? [
                styles.outLineTextStyle,
                textStyle,
                disabled && BASESTYLES.fontAsicsBold(16, COLORS.grey_18),
              ]
            : [
                styles.textStyle,
                textStyle,
                disabled && BASESTYLES.fontAsicsBold(16, COLORS.grey_18),
              ]
        }>
        {text}
      </Text>
    </TouchableOpacity>
  ) : (
    <View
      activeOpacity={0.5}
      style={
        outline
          ? [styles.outlineContainer, containerStyle]
          : [styles.container, containerStyle]
      }>
      <Text
        style={
          outline
            ? [styles.outLineTextStyle, textStyle]
            : [styles.textStyle, textStyle]
        }>
        {text}
      </Text>
    </View>
  );
}
