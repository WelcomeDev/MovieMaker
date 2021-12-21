import classNames from 'classnames';
import './eventData.scss';
import { memo } from 'react';
import { MovieEvent } from '../../../../General/model/movieEvent';

export interface EventDataProps {
    className: string;
    event: MovieEvent;
}

export const EventData = memo((props: EventDataProps) => {
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
                onClick={() => window.open(event.videoUrl, '_blank')}
                className={'event-data__video'}
            >
                Материал
            </button>
        </section>
    );
});