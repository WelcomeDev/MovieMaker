import axios from 'axios';
import { globalConfig } from '../../../config/globalConfig';
import { EventDto, MovieEvent } from '../../General/model/movieEvent';
import { GetConferenceParams } from '../../General/params/getConferenceParams';

const client = axios.create({ baseURL: `${globalConfig.baseUrl}/${globalConfig.eventsBaseUrl}` });

export function get() {
    const params: GetConferenceParams = { isShown: true };
    return client.get<EventDto[]>(
        `list`,
        {
            params,
        })
        .then(resp => resp.data
            .map(item => new MovieEvent(item)),
        );
}
