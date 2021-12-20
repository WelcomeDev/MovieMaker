import { EventDto, MovieEvent } from '../../General/model/movieEvent';
import { globalConfig } from '../../../config/globalConfig';
import axios from 'axios';

const client = axios.create()

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