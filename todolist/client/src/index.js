import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import{configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import productReducer from './redux/reducer';
import { handleSaga } from './redux/saga';
const root = ReactDOM.createRoot(document.getElementById('root'));
const saga = createSagaMiddleware()
const store = configureStore({
  reducer: {
    product :productReducer,
  },
  middleware: [saga]
})
saga.run(handleSaga)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
