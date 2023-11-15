import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

//redux
import {useDispatch} from 'react-redux';
import {updateInitialRouteName} from '../../redux/slices/commonSlice';
import {getCommonStates} from '../../redux/selectors';

//styles
import styles from './styles';

//custom components
import {DrawerItem} from '@react-navigation/drawer';
import {BASESTYLES, COLORS} from '../../themes';
import {ScreenName} from '../../routes/screenName';
import navigationService from '../../routes/navigationService';

var DRAWER_ITEMS = [
  {
    label: 'Product List',
    navigateTo: ScreenName.productList,
    props: {},
  },
  {
    label: 'Profile',
    navigateTo: ScreenName.profile,
    props: {},
  },
];

export default function CustomDrawer(props) {
  const dispatch = useDispatch();
  const {userDetails} = getCommonStates();

  renderSingleDrawerItem = item => {
    return <Text style={styles.drawerItemText}>{item.label}</Text>;
  };

  renderDrawerItem = (item, index) => {
    return (
      <DrawerItem
        key={index}
        label={({focused, color}) => {
          return this.renderSingleDrawerItem(item);
        }}
        onPress={() => {
          if (item.navigateTo != '') {
            props.navigation.navigate(item.navigateTo, {...item.props});
          }
        }}
      />
    );
  };

  return (
    <SafeAreaView style={BASESTYLES.flex()}>
      <View style={styles.drawerRootContainer}>
        <View style={BASESTYLES.flex()}>
          <TouchableOpacity
            onPress={() => {}}
            style={[BASESTYLES.flexDirection(), BASESTYLES.alignItemsCenter]}>
            <View style={styles.headerTextContainer}>
              <Text style={[{color: COLORS.black_1}]}>
                Email : {userDetails?.email}
              </Text>
              <Text style={styles.userName}>
                Your Password is : {userDetails?.password}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={[
              styles.horizontalRule,
              BASESTYLES.marginTop(5),
              BASESTYLES.marginBottom(5),
            ]}
          />
          <ScrollView>
            {DRAWER_ITEMS.map(this.renderDrawerItem.bind(this))}
          </ScrollView>
          <View
            style={[
              styles.horizontalRule,
              BASESTYLES.marginTop(5),
              BASESTYLES.marginBottom(5),
            ]}
          />

          <TouchableOpacity
            onPress={() => {
              dispatch(updateInitialRouteName(ScreenName.signin));
              navigationService.navigateAndReset(ScreenName.signin);
            }}
            style={[BASESTYLES.flexDirection, BASESTYLES.alignItemsCenter]}>
            <Text style={[styles.drawerItemText, BASESTYLES.marginBottom(2)]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
