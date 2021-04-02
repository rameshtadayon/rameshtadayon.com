import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { store } from './store';


library.add(faHome)

const history = createBrowserHistory()


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
