import { makeAutoObservable } from 'mobx';
import { eventsMock } from './MOCK/eventsMock';
import { MovieEvent } from '../model/movieEvent';

export class EventStore {
    events: MovieEvent[];

    constructor() {
        this.events = [];
        makeAutoObservable(this);
    }

    load = () => {
        this.events = eventsMock;
    };
}