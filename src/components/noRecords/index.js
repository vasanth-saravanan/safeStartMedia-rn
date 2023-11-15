import React from 'react';
import {View, Text} from 'react-native';

//styles
import styles from './styles';

//contants
import {ERROR_HANDLER_TEXT} from '../../constants';

const NoRecords = props => {
  const {errorMessage = null} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textlabel}>
        {!!errorMessage
          ? errorMessage
          : ERROR_HANDLER_TEXT.currentlyUnavailable}
      </Text>
    </View>
  );
};

export default NoRecords;
