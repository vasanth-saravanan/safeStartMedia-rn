import React from 'react';

//redux
import {useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

//routes
import {RouteStack} from './src/routes';

const AppRoutes = props => {
  const commonReducerState = useSelector(state => state.common);

  return (
    <>
      <RouteStack initialRouteName={commonReducerState?.initialRouteName} />
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
