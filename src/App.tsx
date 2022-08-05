import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Login from './routes/auth/login';

function App() {
    const [showWidget, setShowWidget] = useState(false);

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
