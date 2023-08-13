import { createStore, applyMiddleware } from "redux";
import createMiddle from "redux-saga"
import root from "./reducers"
import { rootSaga } from "./sagas";

const saga = createMiddle()
const store = createStore(root,applyMiddleware(saga));

saga.run(rootSaga)
export default store


