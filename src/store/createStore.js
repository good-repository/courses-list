import { createStore, applyMiddleware } from "redux";

const store = (reducers, middlewares) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

export default store;
