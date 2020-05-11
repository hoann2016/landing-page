import { format } from 'date-fns';

export class ClassModel {
    public timeFrom: Date;
    public timeTo: Date;
    public name: string;
    public price: number;
    public slot: number;
    public user: {
        name: string;
        avatar: string;
        id: number;
    }
    public room: string;
    public note: string;
    public type: string;

    constructor(init?: Partial<ClassModel>) {
        Object.assign(this, init);
    }

    public get getTimeFormat(): string {
        return `${ format(this.timeFrom, 'HH:mm') } - ${ format(this.timeTo, 'HH:mm') }`;
    }

    public get getAvatar(): string {
        return this.user.avatar;
    }
}