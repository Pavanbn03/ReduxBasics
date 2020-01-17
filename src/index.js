import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import Counter from './store/counter/counter';
import Result from './store/result/result'
const rootReducer = combineReducers({
    ctr:Counter,
    res:Result
})
const store = createStore(rootReducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
