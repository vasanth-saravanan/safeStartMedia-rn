import {createDrawerNavigator} from '@react-navigation/drawer';

//components
import CustomDrawer from '../components/customDrawer';

//screens
import screensPath from './screensPath';
import {ScreenName} from './screenName';
import {BASESTYLES} from '../themes';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: [BASESTYLES.width(70)],
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={ScreenName.productList}
        component={screensPath.ProductList}
      />
      <Drawer.Screen
        name={ScreenName.profile}
        component={screensPath.Profile}
      />
    </Drawer.Navigator>
  );
}
