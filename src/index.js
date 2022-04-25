import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './ReactRedux/StateProvider';
import reducerr, {initialState} from './ReactRedux/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducerr}>
      <App />
    </StateProvider>
  </React.StrictMode>
);