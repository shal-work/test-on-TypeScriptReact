import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redus/store';

let renderEntireTree = (state) => { 
    ReactDOM.render(
        <App 
            state={state} 
            versionAnswer={store.versionAnswer.bind(store)} 
            addAnswer={store.addAnswer.bind(store)} 
            getGo={store.getGo.bind(store)} 
            shuffleOptions={store.shuffleOptions.bind(store)}
            getQuantity={store.getQuantity.bind(store)}
        />, 
        document.getElementById('root'));
};

renderEntireTree(store.getState(), store.initAnswer());

store.subscribe(renderEntireTree);