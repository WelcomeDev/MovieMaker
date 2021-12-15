import { useContactForm } from './hooks/useContactForm';
import { emailValidator, messageValidator, nameValidator } from './contactsValidators';
import './contactsPage.scss';

export function ContactsPage() {
    const { register, onSubmit, isValid } = useContactForm();
    // todo: переделать на компонент, который принимает еше и ошибку в пропсах
    // todo: проверить с мемо!
    return (
        <div
            className={'contacts-page'}
        >
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
                    placeholder={'Ваше e-mail'}
                    {...register('email', emailValidator)}
                />
                <textarea
                    className={'contacts-page__form__message'}
                    placeholder={'Расскажите о вашей идее!'}
                    {...register('message', messageValidator)}
                />
                <button
                    className={'contacts-page__form__submit'}
                    disabled={!isValid}
                >
                    Отправить
                </button>
            </form>
            <footer>

            </footer>
        </div>
    );
}