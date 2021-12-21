import { useAdminEventsStore } from '../../hooks/context/adminEventsProvider';
import { MovieEvent } from '../../../General/model/movieEvent';
import { Icon } from '@iconify/react';
import { observer } from 'mobx-react';
import './eventsList.scss';

function AdminEventItem(movieEvent: MovieEvent) {
    return (
        <li
            key={movieEvent.id}
            className={'event'}
        >
            <p>
                <span>{'Название: '}</span>
                {movieEvent.name}
            </p>
            <p>
                <span>{'Дата проведения: '}</span>
                {movieEvent.date.format('DD.MM.YYYY')}
            </p>
            <p>
                <span>{'Заказчик: '}</span>
                {movieEvent.client}
            </p>
            <p>
                <span>{'Описание: '}</span>
                {movieEvent.description ? movieEvent.description : 'Описание отсутствует'}
            </p>
            <p
                onClick={() => window.open(movieEvent.videoUrl, '_blank')}
            >
                <span>{'Видеоматериал: '}</span>
                {`${movieEvent.videoUrl.substring(1, 30)}...`}
            </p>
            <Icon
                icon={'mdi:pencil'}
                className={'event__edit'}
                onClick={() => alert('Sorry! Я не успела это доделать =(')}
            />
        </li>
    );
}

export const EventsList = observer(() => {
    const { events } = useAdminEventsStore();
    return (
        <ul
            className={'events-list'}
        >
            {
                events.map(item => <AdminEventItem {...item}/>)
            }
        </ul>
    );
});
