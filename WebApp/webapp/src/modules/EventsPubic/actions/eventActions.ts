import axios from 'axios';
import { globalConfig } from '../../../config/globalConfig';
import { EventDto, MovieEvent } from '../model/movieEvent';

const client = axios.create({ baseURL: globalConfig.baseUrl });

export function get() {
    client.get<EventDto[]>(globalConfig.eventsBaseUrl)
        .then(resp => resp.data
            .map(item => new MovieEvent(item)),
        );
}

export function create() {

}

export function update() {

}
