import { FC } from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../../components/auth/login';

export interface ILoginPageContainerProps {}

const LoginPageContainer: FC<ILoginPageContainerProps> = () => {
    return (
        <>
            <LoginPage />
            <Link to="/signup">Sign up</Link>
        </>
    );
};

export default LoginPageContainer;
