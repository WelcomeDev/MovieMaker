import './contactsPage.scss';
import { Footer } from './footer/footer';
import { ContactForm } from './contactForm/contactForm';

export function ContactsPage() {

    // todo: переделать на компонент, который принимает еше и ошибку в пропсах
    // todo: проверить с мемо!
    return (
        <div
            className={'container'}
        >
            <div
                className={'contacts-page'}
            >
                <h2>Хотите видеоролик?</h2>
                <p>Свяжитесь с нами прямо сейчас! Мы вам обязательно ответим в ближайшее время, чтобы обсудить
                    подробности!</p>
                <ContactForm/>
                <Footer/>
            </div>
        </div>
    );
}