import './eventItem.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { EventData } from '../eventData/eventData';
import { MovieEvent } from '../../../../General/model/movieEvent';

export type DisplayType = 'light' | 'dark';

export interface EventProps {
    event: MovieEvent;
    icon: string;
    displayType: DisplayType;
}

export function EventItem(props: EventProps) {

    const { id } = props.event;

    const [isHover, setHover] = useState(false);

    return (
        <li
            key={id}
            className={classNames('event-item',
                {
                    'event-item_light': props.displayType === 'light',
                    'event-item_dark': props.displayType === 'dark',
                })}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                className={classNames('event-item__icon')}
            >
                <img
                    src={props.icon}
                    alt={''}
                    style={{ opacity: isHover ? 0.15 : 1 }}
                />
            </div>
            <EventData
                isHover={isHover}
                event={props.event}
                className={'event-item__info'}
            />
        </li>
    );
}