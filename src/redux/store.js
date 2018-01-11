import React from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer as router } from 'react-router-redux'
import {reducer as formReducer} from "redux-form";

import main from "./reducers/main";

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

export default function () {
  return createStore(combineReducers({
      router,
      main,
      form: formReducer,
    }),
    applyMiddleware(thunk, logger)
  );
}
