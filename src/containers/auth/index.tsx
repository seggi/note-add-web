import { FC } from 'react';
import LoginPage from '../../components/auth/login';

export interface ILoginPageContainerProps {}

const LoginPageContainer: FC<ILoginPageContainerProps> = () => {
    return (
        <>
            <LoginPage />
        </>
    );
};

export default LoginPageContainer;
