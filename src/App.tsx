import React, { useState } from 'react';
import './App.css';
import { LoginPage } from './pages/auth/login';
import { SignUpPage } from './pages/auth/signup';

function App() {
  const [showWidget, setShowWidget] = useState(false);



  return (
    <div className="App">
      <header className="App-header">
        <div className="auth-box__row">
          <div className="auth-content">
            {showWidget !== false 
            ? <SignUpPage />
            : <LoginPage/>
            }
          </div>
          <div className="change-widget-btn">
            <button onClick={
              () => {
                setShowWidget(true)
              }
            }>
              Sign up
            </button>
          </div>
        </div>
      
      </header>
    </div>
  );
}

export default App;
