import {StyleSheet} from 'react-native';

//styles and themes
import {BASESTYLES, COLORS} from '../../themes';
import {isAndroid} from '../../constants';

const styles = StyleSheet.create({
  rootContainer: [BASESTYLES.flex(), BASESTYLES.alignItemsCenter],
  title: [
    BASESTYLES.fontAsicsBold(16, COLORS.primary),
    BASESTYLES.marginTop(3),
  ],
  btn: color => [
    BASESTYLES.borderRadius(7),
    BASESTYLES.paddingHorizontal(6),
    BASESTYLES.bgColor(color),
    BASESTYLES.width(85),
    BASESTYLES.shadow_hide,
  ],
  btnText: color => BASESTYLES.fontAsicsBold(15, color),
  googleBtn: [
    BASESTYLES.borderRadius(7),
    BASESTYLES.paddingHorizontal(6),
    BASESTYLES.bgColor(COLORS.white_1),
    BASESTYLES.width(85),
    BASESTYLES.borderWidth(1),
    BASESTYLES.borderColor(COLORS.primary),
    BASESTYLES.shadow_hide,
  ],
  orContainer: [
    BASESTYLES.flexDirection(),
    BASESTYLES.marginTop(4),
    BASESTYLES.alignItemsCenter,
    BASESTYLES.justifyContentSB,
    BASESTYLES.width(85),
  ],
  hr: [
    BASESTYLES.widthHeightPer('42%'),
    BASESTYLES.bgColor(COLORS.grey_2),
    BASESTYLES.height(0.2),
  ],
  loginLabelContainer: [
    BASESTYLES.flexDirection(),
    BASESTYLES.alignItemsCenter,
  ],
  loginSuggText: [
    BASESTYLES.fontAsicsRegular(15, COLORS.primary),
    BASESTYLES.marginTop(1),
  ],
  signUpText: [
    BASESTYLES.fontAsicsBold(16, COLORS.primary),
    BASESTYLES.marginTop(1),
    BASESTYLES.textUnderline,
  ],
  textInputContainer: [
    BASESTYLES.widthHeightPer('85%'),
    BASESTYLES.alignSelfCenter,
    BASESTYLES.marginBottom(isAndroid ? 2 : 0),
  ],
  rememberRow: [BASESTYLES.flexDirection(), BASESTYLES.alignItemsCenter],
  checkboxContainer: [
    BASESTYLES.flex(),
    BASESTYLES.flexDirection(),
    BASESTYLES.alignItemsCenter,
  ],
  forgotpasswordContainer: [BASESTYLES.flex(), BASESTYLES.alignItemsFE],
  forgotPassword: [
    BASESTYLES.fontAsicsRegular(14, COLORS.primary),
    BASESTYLES.textUnderline,
  ],
});

export default styles;
