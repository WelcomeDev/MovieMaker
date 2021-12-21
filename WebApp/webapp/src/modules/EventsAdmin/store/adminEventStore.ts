import { MovieEvent } from '../../General/model/movieEvent';
import { action, makeAutoObservable } from 'mobx';
import { get } from '../actions/eventActions';

export class AdminEventStore {
    events: MovieEvent[];
    isLoading: boolean;

    constructor() {
        this.isLoading = false;
        this.events = [];
        makeAutoObservable(this);
    }

    @action
    load = async () => {
        this.isLoading = true;
        this.events = await get();
        this.isLoading = false;
    };
}