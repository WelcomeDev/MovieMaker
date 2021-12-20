import './contactsPage.scss';
import { Footer } from './footer/footer';
import { ContactForm } from './contactForm/contactForm';
import { memo } from 'react';

export const ContactsPage = memo(() => {

    // todo: переделать на компонент, который принимает еше и ошибку в пропсах
    // todo: проверить с мемо!
    return (
        <section
            className={'contacts-page'}
        >
            <h2>Хотите видеоролик?</h2>
            <p>Свяжитесь с нами прямо сейчас! <br/> Мы вам обязательно ответим в ближайшее время, чтобы обсудить
                подробности!</p>
            <ContactForm/>
            <Footer/>
        </section>
    );
});