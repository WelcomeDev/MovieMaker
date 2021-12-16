import { useForm } from 'react-hook-form';
import { NeedEventParams } from '../../../params/needEventParams';

export function useContactForm() {
    const { register, formState: { isValid, errors } } = useForm<NeedEventParams>(
        {
            shouldUseNativeValidation: true,
            mode: 'onSubmit',
            reValidateMode: 'onChange',
        },
    );

    function onSubmit() {

    }

    return {
        onSubmit,
        register,
        isValid,
        errors,
    };
}