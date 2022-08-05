import React, { FC } from 'react';
import './index.css';

export interface ILoginPageProps {}

const LoginPage: FC<ILoginPageProps> = () => {
    return (
        <>
            <h2 className="auth-title">Note Add</h2>
            <div className="input-box">
                <form>
                    <input type="text" value="" placeholder="Enter Email" />
                    <input type="text" value="" placeholder="Enter Password" />
                    <button>Login</button>
                </form>
            </div>
        </>
    );
};

export default LoginPage;
