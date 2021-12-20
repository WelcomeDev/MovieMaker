export enum Navigation {
    EVENTS = '/events',
    AUTH = '/auth'
}

export enum EventsNavigation{
    'HELLO' = '/events/hello',
    'ABOUT_AUTHOR' = '/events/about',
    'WORKS' = '/events/works',
    'CONTACTS' = '/events/contacts',
}

export enum ProtectedNavigation {
    EVENTS = 'manage-events'
}

export type NavigationType = Navigation | EventsNavigation | ProtectedNavigation;
