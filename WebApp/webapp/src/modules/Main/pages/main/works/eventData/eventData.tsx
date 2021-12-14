import classNames from 'classnames';
import { MovieEvent } from '../../../../../Events/model/movieEvent';
import './eventData.scss';

export interface EventDataProps {
    className: string;
    event: MovieEvent;
}

export function EventData(props: EventDataProps) {
    const { event, className } = props;
    return (
        <section
            className={classNames(className, 'event-data')}
        >
            <p
                className={'event-data__title'}
            >
                {event.name}
            </p>
            <p
                className={'event-data__date'}
            >
                {event.date.format('DD.MM.YYYY')}
            </p>
            <p
                className={'event-data__client'}
            >
                {event.client}
            </p>
            <p
                className={'event-data__description'}
            >
                {event.description ? event.description : 'Описание отсутствует'}
            </p>
            <button
                className={'event-data__video'}
            >
                Материал
            </button>
        </section>
    );
}