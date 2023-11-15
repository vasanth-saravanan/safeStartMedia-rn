import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

//themes
import {BASESTYLES, COLORS} from '../../themes';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: hp(0.1),
    ...BASESTYLES.paddingHorizontal(2),
    maxWidth: '100%',
    flexDirection: 'row',
  },
  textStyle: {
    ...BASESTYLES.marginVertical(1.5),
    ...BASESTYLES.marginHorizontal(1),
    ...BASESTYLES.fontAsicsBold(16, COLORS.white_1),
  },
  outlineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white_1,
    borderRadius: 8,
    borderColor: COLORS.primary,
    borderWidth: 1.2,
    flexDirection: 'row',
  },
  outLineTextStyle: {
    ...BASESTYLES.marginVertical(1.5),
    ...BASESTYLES.marginHorizontal(1),
    ...BASESTYLES.fontAsicsBold(16),
  },
  loaderStyle: {
    ...BASESTYLES.marginVertical(1),
    alignSelf: 'center',
    paddingBottom: 4,
  },
});

export default styles;
