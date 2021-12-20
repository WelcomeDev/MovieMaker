import { AuthToken } from '../model/authToken';

const TOKEN_KEY = 'MOVIE_MAKER_TOKEN';

export function getToken() {
    const storedValue = localStorage.getItem(TOKEN_KEY);
    if (storedValue) return JSON.parse(storedValue) as AuthToken;

    return null;
}

export function saveToken(token: AuthToken) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

