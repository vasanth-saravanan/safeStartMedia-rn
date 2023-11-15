import React from 'react';
import {View, Text} from 'react-native';

//styles and themes
import styles from './styles';
import {COLORS} from '../../themes';

//custom components
import CustomSafeArea from '../../components/customSafeArea';

const Profile = props => {
  return (
    <>
      <CustomSafeArea backgroundColor={COLORS.white_1}>
        <View style={styles.container}>
          <Text>Profile Screen</Text>
        </View>
      </CustomSafeArea>
    </>
  );
};

export default Profile;
