import axios from 'axios';
import { globalConfig } from '../../../config/globalConfig';
import { User } from '../model/user';

const client = axios.create({ baseURL: globalConfig.baseUrl });

export function logIn(login: string, password: string) {
    return client.post('auth', { login, password })
        .then(whoAmI);
}

export function whoAmI() {
    return client.post<User>('whoami')
        .then(resp => resp.data);
}