import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemsList from './components/ItemsList';

const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
        <ItemsList/>
    </Provider>,
    document.getElementById('root')
);