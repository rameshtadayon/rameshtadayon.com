import {
    connectRouter,
    routerMiddleware,
  } from "connected-react-router";
  import { createBrowserHistory } from "history";
  import { applyMiddleware, combineReducers, compose, createStore } from "redux";
  
  export const history = createBrowserHistory();
  
  let previousPage;
  const fire = (location) => {
    if (location.pathname === previousPage) {
      return;
    }
    previousPage = location.pathname;
  };
  fire(window.location);
  history.listen(fire);
  
  const rootReducer = combineReducers({
    router: connectRouter(history),
  });
  
  export const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  );
  