import * as t from 'io-ts';
import moment, { Moment } from 'moment';

export const EventType = t.interface({
    id: t.string,
    name: t.string,
    description: t.union([t.string, t.undefined, t.null]),
    videoUrl: t.string,
    isShown: t.union([t.boolean, t.undefined, t.null]),
    client: t.string,
    date: t.string,
    category: t.string,
});

export interface EventDto extends t.TypeOf<typeof EventType> {

}

export class Event {
    id: string;
    name: string;
    description: string | null;
    videoUrl: string;
    isShown: boolean;
    client: string;
    date: Moment;
    category: string;

    constructor(params: EventDto) {
        this.id = params.id;
        this.name = params.name;
        this.description = params.description ?? null;
        this.videoUrl = params.videoUrl;
        this.isShown = !!params.isShown;
        this.client = params.client;
        this.date = moment(params.date);
        this.category = params.category;
    }
}
