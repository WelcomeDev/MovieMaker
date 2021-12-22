import axios from 'axios';
import { globalConfig } from '../../../config/globalConfig';
import { User } from '../model/user';

const client = axios.create({ baseURL: globalConfig.baseUrl });

export function logIn(username: string, password: string) {
    return client.post<User>('auth', { username, password })
        .then((response) => response.data);
}
