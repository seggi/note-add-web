import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import routes from './routes';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={<div>{'Loading...'}</div>}>
                    <Routes>
                        {routes.map((route) => (
                            <Route key={route.name} path={route.path} element={<route.component />} />
                        ))}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
