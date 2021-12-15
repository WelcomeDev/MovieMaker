import moment from 'moment';
import { MovieEvent } from '../../model/movieEvent';

export const eventsMock: MovieEvent[] = [
    {
        id: '12233',
        name: 'Alkatras',
        description: 'Клип DEMILICH на песню Alkatras',
        videoUrl: 'https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D0%9A%D0%BB%D0%B8%D0%BF%D1%8B?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D0%9A%D0%BB%D0%B8%D0%BF%D1%8B%2FALKATRAS_2.mp4',
        isShown: true,
        client: 'DEMILICH',
        date: moment('2021-12-31'),
        category: 'Клипы',
    },
    {
        id: '12234',
        name: 'Wesson',
        description: 'Клип DEMILICH на песню Wesson',
        videoUrl: 'https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D0%9A%D0%BB%D0%B8%D0%BF%D1%8B?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D0%9A%D0%BB%D0%B8%D0%BF%D1%8B%2FWESSON_FIN_FIN.mp4',
        isShown: true,
        client: 'DEMILICH',
        date: moment('2021-12-31'),
        category: 'Клипы',
    },
    {
        id: '12235',
        name: 'Набор "ЭРКУ"',
        description: 'Набор в ансамбль национального тацна "ЭРКУ"',
        videoUrl: 'https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%2FAdvertise_RQ.mp4',
        isShown: true,
        client: 'ЭРКУ',
        date: moment('2021-12-31'),
        category: 'Реклама',
    },
    {
        id: '12236',
        name: 'Розыгрыш "ЭРКУ"',
        description: 'Розыгрыш от ансамбля национального танца "ЭРКУ" в честь 3-х летия ансамбля',
        videoUrl: 'https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%2Fraffle.mp4',
        isShown: true,
        client: 'ЭРКУ',
        date: moment('2021-12-31'),
        category: 'Реклама',
    },
    {
        id: '12237',
        name: 'Реклама SweetPods',
        description: 'Реклама жидкостей собственного производства для вейпа от магазина SweetPods',
        videoUrl: 'https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%2FZhizhi_Hope_FIN.mp4',
        isShown: true,
        client: 'SweetPods',
        date: moment('2021-12-31'),
        category: 'Реклама',
    },
    {
        id: '12237',
        name: 'Реклама BarberShop BILLIONAIRE',
        description: 'Реклама барбершопа BILLIONAIRE',
        videoUrl: 'https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%2Fbarb_1.mp4',
        isShown: true,
        client: 'BarberShop BILLIONAIRE',
        date: moment('2021-12-31'),
        category: 'Реклама',
    },


];