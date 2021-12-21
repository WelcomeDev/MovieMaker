import { EventDto, MovieEvent } from '../../General/model/movieEvent';
import { globalConfig } from '../../../config/globalConfig';
import axios from 'axios';

const client = axios.create({ baseURL: `${globalConfig.baseUrl}/${globalConfig.eventsBaseUrl}` });

export function get() {
    return client.get<EventDto[]>('list')
        .then(resp => resp.data
            .map(item => new MovieEvent(item)),
        );
}

export function create() {

}

export function update() {

}