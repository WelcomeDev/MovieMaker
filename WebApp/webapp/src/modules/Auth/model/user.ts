export enum Authorities {
    // может фсе
    ADMIN = 'ADMIN',
    // может только отвечать на письма
    MANAGER = 'MANAGER',
}

export interface User {
    name: string;
    authority: Authorities;
}
