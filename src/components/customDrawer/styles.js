import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../../themes';

const styles = StyleSheet.create({
  drawerRootContainer: {
    flex: 1,
    paddingVertical: widthPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(2),
  },
  drawerHeaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  headerTextContainer: {
    flex: 1,
    paddingLeft: widthPercentageToDP(3),
  },
  userName: {
    fontSize: widthPercentageToDP(4),
    top: 3,
    color: COLORS.black_1,
    fontFamily: FONTS.AsicsBold,
  },
  drawerItemText: {
    color: COLORS.black_1,
    fontSize: widthPercentageToDP(4),
    fontFamily: FONTS.AsicsRegular,
  },

  horizontalRule: {height: 1, width: '100%', backgroundColor: COLORS.grey_1},
});

export default styles;
