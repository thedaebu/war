import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './game.css';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");
    window.getState = store.getState;

    ReactDOM.render(<Root store={store}/>, root);
})

