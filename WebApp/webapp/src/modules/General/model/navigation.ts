export enum Navigation {
    EVENTS = '/events',
    AUTH = '/auth',
    MANAGE = '/manage'
}

export enum EventsNavigation {
    'HELLO' = '/events/hello',
    'ABOUT_AUTHOR' = '/events/about',
    'WORKS' = '/events/works',
    'CONTACTS' = '/events/contacts',
}

export enum AdminNavigation {
    EVENTS = '/manage/events',
    MAILS = '/manage/mails'
}

export type NavigationType = Navigation | EventsNavigation | AdminNavigation;