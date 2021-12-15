import './helloPage.scss';
import ae from './assets/ae_logo.png';
import davinci from './assets/davinci_logo.png';
import pr from './assets/pr_logo.png';
import logo from '../../assets/icon-movie-maker.png';

export function HelloPage() {
    return (
        <div className={'container'}>
            <div className={'hello__content'}>
                <div
                    className={'hello__page__image'}
                >
                    <img
                        src={logo}
                        className={'hello__page__image_background'}
                        alt=""/>
                    <img
                        src={ae}
                        alt=""
                        className={'ie'}
                    />
                    <img
                        src={davinci}
                        alt=""
                        className={'davinci'}
                    />
                    <img
                        src={pr}
                        alt=""
                        className={'pr'}
                    />
                </div>
                <div
                    className={'hello__page__info'}
                >
                    <div
                        className={'heading'}
                    >
                        Видеомонтаж любой сложности
                    </div>
                    <p>
                        Свадьба? Мероприятие? Монтаж? <i>Это ко мне!</i>
                    </p>
                    <button
                        className={'contact'}
                    >
                        <a
                            href="mailto: abc@example.com"
                        >
                            Написать
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}