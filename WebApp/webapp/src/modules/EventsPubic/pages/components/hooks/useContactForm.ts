import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { CreateMailParams } from '../../../params/createMailParams';
import { create } from '../../../actions/mailActions';

export function useContactForm() {
    const {
        register,
        reset,
        handleSubmit,
        formState:
            {
                isValid,
                errors,
            },
    } = useForm<CreateMailParams>(
        {
            shouldFocusError: false,
            mode: 'onBlur',
            reValidateMode: 'onChange',
        },
    );

    function onSubmit() {
        handleSubmit(
            async (data: CreateMailParams) => {
                await create(data);
                reset({
                    email: '',
                    message: '',
                    name: '',
                });
            },
        )
        ();
    }

    const error = useMemo(
        () => {
            console.log(errors);
            if (errors.name && errors.name.message)
                return errors.name.message;

            if (errors.email && errors.email.message)
                return errors.email.message;

            if (errors.message && errors.message.message)
                return errors.message.message;

            return undefined;
        },
        [errors.name, errors.email, errors.message]);

    return {
        onSubmit,
        register,
        isValid,
        error,
    };
}