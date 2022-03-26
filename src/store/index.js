import createStore from "./createStore";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./slices/rootReducer";
import rootSaga from "./slices/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export { store };
