import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { CloneSite } from '../../shared/models/cloneSite.models';

@Injectable({
    providedIn: 'root'
})
export class CloneSiteService {
    cloneSiteProgress = this.socket.fromEvent<CloneSite>('CLONE_SITE');
    constructor(private socket: Socket) {}
    ready(merchantId: string) {
        this.socket.emit(`CLONE_READY_${merchantId}`);
    }
}
