import { FC } from 'react';
import { SignUpPage } from '../../components/auth/signup';

export interface ISignUpPageContainerProps {}

const SignUpPageContainer: FC<ISignUpPageContainerProps> = () => {
    return (
        <>
            <SignUpPage />
        </>
    );
};

export default SignUpPageContainer;
