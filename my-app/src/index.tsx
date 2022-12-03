import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux';
import counter from "./reducers";
import rootReducer from "./reducers";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    console.log("store", store);
    console.log("action", action);
    next(action);
}
/*
    위의 함수를 풀어서 표현하면 이렇게 됨
    똑같은 함수
    const loggerMiddleware = function (store) {
        return function (next) {
            return function (action) {
                // code
            }
        }
    }

* */
const middleware = applyMiddleware(thunk, loggerMiddleware);
const store = createStore(rootReducer, middleware);
const render = () => root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App value={store.getState()}
               onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
               onDecrement={() => store.dispatch({ type: 'DECREMENT' })}/>
      </Provider>
  </React.StrictMode>
);
render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
