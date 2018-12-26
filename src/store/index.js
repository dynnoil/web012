import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { rootReducer } from '../reducer'

export default function configureStore(initialState) {
    const createStoreWithMiddleware = applyMiddleware(
        thunk
    )(createStore);

    return createStoreWithMiddleware(
        rootReducer,
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
}
