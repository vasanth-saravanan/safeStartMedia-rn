import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BASESTYLES, COLORS} from '../../themes';

const styles = StyleSheet.create({
  container: {
    marginVertical: hp(2),
    width: '100%',
  },
  textlabel: [
    BASESTYLES.fontAsicsRegular(14, COLORS.grey_1),
    BASESTYLES.textAlignCenter,
  ],
});

export default styles;
