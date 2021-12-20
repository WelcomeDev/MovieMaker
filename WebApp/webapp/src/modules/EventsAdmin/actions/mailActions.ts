import axios from 'axios';
import { globalConfig } from '../../../config/globalConfig';
import { Mail, MailDto } from '../model/mail';

const client = axios.create({ baseURL: `${globalConfig.baseUrl}/${globalConfig.mailBaseUrl}` });

export function list() {
    return client.get<MailDto[]>('list')
        .then(resp => resp.data
            .map(item => new Mail(item)));
}

export function markAnswered(id: string) {
    const url = `mark-answered/${id}`;
    return client.post(url);
}
