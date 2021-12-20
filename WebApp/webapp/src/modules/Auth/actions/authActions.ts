import axios from 'axios';
import { globalConfig } from '../../../config/globalConfig';
import { User } from '../model/user';
import { AuthToken } from '../model/authToken';
import { saveToken } from './tokenStorage';

const client = axios.create({ baseURL: globalConfig.baseUrl });

export function logIn(login: string, password: string) {
    return client.post<AuthToken>('auth', { login, password })
        .then((response) => saveToken(response.data))
        .then(whoAmI);
}

export function whoAmI() {
    return client.post<User>('whoami')
        .then(resp => resp.data);
}