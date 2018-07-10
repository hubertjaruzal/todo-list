import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import fontawesome from '@fortawesome/fontawesome'
import fontawesomeFAS from '@fortawesome/fontawesome-free-solid';
import fontawesomeFAR from '@fortawesome/fontawesome-free-regular';

import store, { history } from './redux/store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

fontawesome.library.add(fontawesomeFAS, fontawesomeFAR);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
