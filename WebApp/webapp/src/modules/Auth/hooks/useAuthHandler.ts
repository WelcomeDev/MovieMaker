import { FieldErrors, useForm } from 'react-hook-form';
import { AuthParams } from '../params/authParams';
import { logIn } from '../actions/authActions';

export function useAuthHandler() {
    // const { setError } = useError();

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
                logIn(data.username, data.password)
                    .then(() => {
                        // todo: navigate to '/'
                    })
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