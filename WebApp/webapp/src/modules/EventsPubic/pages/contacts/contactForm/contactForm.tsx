import { emailValidator, messageValidator, nameValidator } from '../contactsValidators';
import { useContactForm } from '../hooks/useContactForm';
import './contactForm.scss';
import { memo } from 'react';

export const ContactForm = memo(() => {
    const {
        register,
        onSubmit,
        isValid,
        error,
    } = useContactForm();
    return (
        <form
            action="#"
            className={'contacts-page__form'}
            onSubmit={e => {
                e.preventDefault();
                onSubmit();
            }}
        >
            <input
                type="text"
                className={'contacts-page__form__name'}
                placeholder={'Ваше имя'}
                {...register('name', nameValidator)}
            />
            <input
                type="text"
                className={'contacts-page__form__email'}
                placeholder={'Ваш e-mail'}
                {...register('email', emailValidator)}
            />
            <textarea
                className={'contacts-page__form__message'}
                placeholder={'Расскажите о вашей идее!'}
                {...register('message', messageValidator)}
            />
            <p
                className={'contacts-page__form__error'}
                style={{ visibility: error ? 'visible' : 'hidden' }}
            >
                {error}
            </p>

            <button
                className={'contacts-page__form__submit'}
                disabled={!isValid}
            >
                Отправить
            </button>
        </form>
    );
});