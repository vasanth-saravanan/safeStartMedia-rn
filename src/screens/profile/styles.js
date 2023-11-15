import {StyleSheet} from 'react-native';

//styles and themes
import {BASESTYLES} from '../../themes';

const styles = StyleSheet.create({
  container: [
    BASESTYLES.baseHorizontalSpace,
    BASESTYLES.flex(),
    BASESTYLES.alignItemsCenter,
    BASESTYLES.justifyContentCenter,
  ],
});

export default styles;
