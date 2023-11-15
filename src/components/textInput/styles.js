import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//themes
import { BASESTYLES, COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: wp(1.5),
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    backgroundColor: COLORS.white_1,
    borderColor: COLORS.grey_2,
  },
  titleContainer: [
    BASESTYLES.flexDirection(),
    {
      bottom: -16,
      zIndex: 10,
      left: 20,
      backgroundColor: COLORS.white_1,
      alignSelf: 'baseline',
      paddingHorizontal: 5,
    },
  ],
  textInputFieldHeight: {
    height: 48,
  },

  textStyle: {
    marginLeft: wp(0.5),
    alignSelf: 'center',
    height: wp(0.5),
    width: '100%',
    paddingLeft: wp(0.5),
    paddingRight: wp(10),
  },
  tel: {
    alignSelf: 'center',
    marginLeft: wp(0.5),
    paddingLeft: wp(0.5),
  },
  textArea: {
    height: 120,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    backgroundColor: COLORS.white_1,
    ...BASESTYLES.marginVertical(1),
    width: '100%',
    ...BASESTYLES.fontAsicsBold(15, COLORS.primary),
  },
  title: {
    ...BASESTYLES.fontAsicsBold(15, COLORS.primary),
    ...BASESTYLES.marginBottom(1),
  },
  eyeIconContainer: [
    BASESTYLES.alignSelfCenter,
    BASESTYLES.paddingLeft(0.5)
  ],

  eyeOpen: { height: 31, width: 31, position: 'absolute', bottom: -5, right: 1 },
  eyeClose: { right: 5, position: 'absolute', bottom: -11 },
  searchIcon: { right: 18, position: 'absolute', bottom: 13 },
  storeSearchIcon: { left: 18, position: 'absolute', bottom: 13 },
});

export default styles;
