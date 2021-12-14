import './helloPage.scss';
import ae from '../../assets/hello/ae_logo.png';
import davinci from '../../assets/hello/davinci_logo.png';
import pr from '../../assets/hello/pr_logo.png';

export function HelloPage() {
    return (
        <div className={'container'}>
            <div className={'hello__content'}>
                <div
                    className={'hello__page__image'}
                >
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