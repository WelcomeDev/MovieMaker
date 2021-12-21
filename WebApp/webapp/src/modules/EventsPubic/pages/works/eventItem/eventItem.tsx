import './eventItem.scss';
import { memo, useState } from 'react';
import classNames from 'classnames';
import { EventData } from '../eventData/eventData';
import { MovieEvent } from '../../../../General/model/movieEvent';

export type DisplayType = 'light' | 'dark';

export interface EventProps {
    event: MovieEvent;
    icon: string;
    displayType: DisplayType;
}

export const EventItem = memo((props: EventProps) => {

    const { id } = props.event;

    return (
        <li
            key={id}
            className={classNames('event-item',
                {
                    'event-item_light': props.displayType === 'light',
                    'event-item_dark': props.displayType === 'dark',
                })}
        >
            <div
                className={classNames('event-item__icon')}
            >
                <img
                    src={props.icon}
                    alt={''}
                />
            </div>
            <EventData
                event={props.event}
                className={'event-item__info'}
            />
        </li>
    );
});
