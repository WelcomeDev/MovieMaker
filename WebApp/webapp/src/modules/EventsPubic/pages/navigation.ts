export enum Navigation {
    EVENTS = 'events',
    AUTH = 'auth'
}

export enum EventsNavigation {
    HELLO = 'hello',
    ABOUT_AUTHOR = 'about',
    WORKS = 'works',
    CONTACTS = 'contacts',
}

export enum ProtectedNavigation {
    EVENTS = 'manage-events'
}

export type NavigationType = Navigation | EventsNavigation | ProtectedNavigation;
