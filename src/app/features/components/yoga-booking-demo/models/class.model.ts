import { format } from 'date-fns';

export interface ClassModel {
    timeFrom: Date;
    timeTo: Date;
    name: string;
    price: number;
    slot: number;
    user: {
        name: string;
        avatar: string;
        id: number;
    };
    studio: number;
    room: string;
    note: string;
    type: string;
}
