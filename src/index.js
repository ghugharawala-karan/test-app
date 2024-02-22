import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import TaskApp from './Task/Taskapp';
import Calc from './Calc';
import { Provider } from 'react-redux';
import store from './store';


export default function App1() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="Taskapp" element={<TaskApp />} />
                    <Route path="calc" element={<Calc />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App1 />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
