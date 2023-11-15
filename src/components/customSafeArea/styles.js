import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

//styles and themes
import {BASESTYLES, COLORS} from '../../themes';

//constants
import {isAndroid} from '../../constants';

const styles = StyleSheet.create({
  toggle: {
    ...BASESTYLES.positionAbsolute,
    bottom: isAndroid ? '10%' : '15%',
    right: '5%',
    backgroundColor: COLORS.primary,
    ...BASESTYLES.alignItemsCenter,
    ...BASESTYLES.justifyContentCenter,
    borderRadius: wp(14),
    height: wp(14),
    width: wp(14),
    ...BASESTYLES.shadow_2,
  },
});

export default styles;
