import moment, { Moment } from 'moment';

export interface MailDto {
    id: string;
    name: string;
    email: string;
    message: string;
    createdDate: string;
    isAnswered: boolean;
}

export class Mail {
    id: string;
    name: string;
    email: string;
    message: string;
    createdDate: Moment;
    isAnswered: boolean;

    constructor(params: MailDto) {
        this.id = params.id;
        this.name = params.name;
        this.email = params.email;
        this.message = params.message;
        this.createdDate = moment(params.createdDate);
        this.isAnswered = params.isAnswered;
    }
}
