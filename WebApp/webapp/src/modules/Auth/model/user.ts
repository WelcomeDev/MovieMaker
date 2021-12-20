export enum Authorities {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
}

export interface User {
    name: string;
    authority: Authorities;
}
