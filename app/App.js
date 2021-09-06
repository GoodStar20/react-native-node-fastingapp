import React, { Fragment } from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';

import { AppContainer } from 'Navigators/AppContainer';
import configureStore from './src/store/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Root>
          <AppContainer />
        </Root>
      </Fragment>
    </Provider>
  );
};

export default App;
