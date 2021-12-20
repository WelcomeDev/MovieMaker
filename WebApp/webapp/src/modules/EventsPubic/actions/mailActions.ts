import axios from 'axios';
import { globalConfig } from '../../../config/globalConfig';
import { CreateMailParams } from '../params/createMailParams';

const client = axios.create({ baseURL: `${globalConfig.baseUrl}/${globalConfig.mailBaseUrl}` });

export function create(params: CreateMailParams) {
    return client.post('create', params);
}