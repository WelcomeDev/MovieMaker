import { action, makeAutoObservable } from 'mobx';
import { Mail } from '../model/mail';
import { list, markAnswered } from '../actions/mailActions';

export class MailsStore {
    mails: Mail[];
    isLoading: boolean;

    constructor() {
        this.isLoading = false;
        this.mails = [];
        makeAutoObservable(this);
    }

    @action
    loadMails = async () => {
        this.isLoading = true;
        this.mails = await list();
        this.isLoading = false;
    };

    @action
    markAnswered = async (id: string) => {
        this.isLoading = true;
        await markAnswered(id);
        this.mails = this.mails.filter(item=>item.id !== id);
        this.isLoading = false;
    };
}