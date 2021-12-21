import './authPage.scss';
import { Password } from './components/password';
import { Username } from './components/username';
import { useAuthHandler } from '../hooks/useAuthHandler';
import { memo } from 'react';

export const AuthPage = memo(()=> {

    const { onSubmit, passwordRegister, loginRegister } = useAuthHandler();

    return (
        <div className={'auth-page-wrapper'}>
            <form
                onSubmit={(e) => {
                    onSubmit();
                    e.preventDefault();
                }}
                className={'auth-form'}
            >
                <p
                    className={'auth-form__title'}
                >
                    Войти
                </p>
                <Username
                    placeholder={'Login'}
                    className={'auth-form__username'}
                    register={loginRegister}
                />
                <Password
                    placeholder={'Password'}
                    className={'auth-form__password'}
                    register={passwordRegister}
                />
                <button
                    className={'auth-form__submit'}
                >
                    Log In
                </button>
            </form>
        </div>
    );
});
