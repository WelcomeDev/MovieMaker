import { FieldErrors, useForm } from 'react-hook-form';
import { AuthParams } from '../params/authParams';
import { useNavigate } from 'react-router-dom';
import { AdminNavigation, Navigation } from '../../General/model/navigation';
import { useAuth } from './context/authProvider';

export function useAuthHandler() {
    // const { setError } = useError();
    const navigate = useNavigate();
    const { logIn } = useAuth();

    const { handleSubmit, register } = useForm<AuthParams>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    function displayError(errors: FieldErrors<AuthParams>) {
        if (errors?.username?.message) {
            // setError(errors?.username?.message);
            return;
        }

        if (errors.password?.message) {
            // setError(errors.password.message);
            return;
        }
    }

    function onSubmit() {
        handleSubmit(
            async (data) => {
                // todo: add loading here with dots under 'Log in' button
                navigate(AdminNavigation.EVENTS);
                logIn(data.username, data.password)
                    .then(() => {
                        navigate(Navigation.MANAGE);
                    });
                // .catch(() => setError('Invalid username or password!'));
            },
            (errors) => displayError(errors),
        )();
    }

    return {
        loginRegister: register('username', { required: true }),
        passwordRegister: register('password', { required: true }),
        onSubmit,
    };
}