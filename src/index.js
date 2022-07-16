import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ShowProduct from './components/showProduct/ShowProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router >
        <Routes >
            <Route path='/' element={<App/>} />
            <Route path='/product/:id' element={<ShowProduct />} />
        </Routes>
    </Router>


);
