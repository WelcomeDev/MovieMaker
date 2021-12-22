export enum Authorities {
    // может фсе
    ADMIN = 'Admin',
    // может только отвечать на письма
    MANAGER = 'Manager',
}

export interface User {
    username: string;
    authority: Authorities;
}
