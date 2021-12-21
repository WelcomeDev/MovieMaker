import { contactsSource } from '../contactsSource';
import { Icon } from '@iconify/react';
import './footer.scss';
import { memo } from 'react';

export const Footer = memo(() => {
    return (
        <footer className={'footer'}>
            <h2
                className={'footer-header'}
            >
                Наша работа
            </h2>
            <div
                className={'contacts__list'}
            >
                {
                    contactsSource.map(item =>
                        <a
                            key={item.url}
                            className={'contact-item'}
                            href={item.url}
                            title={item.title}
                        >
                            <Icon
                                className={'img'}
                                icon={item.iconifyIcon}
                            />
                        </a>,
                    )
                }
            </div>
        </footer>
    );
});