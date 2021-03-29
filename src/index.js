import React from "react";
import ReactDom from "react-dom";
import './styles/stylesheet.css'
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import App from "./Component/App";
import thunk from 'redux-thunk'
import {database} from'./database/config'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, 
    composeEnhancer(applyMiddleware(thunk)))

ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'))