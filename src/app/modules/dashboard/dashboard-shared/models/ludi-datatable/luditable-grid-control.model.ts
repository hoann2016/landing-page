export class LudiTableGridControlModel<T> {
    public title: string;
    public data: Array<T> = [];
    public columns: LudiTableGridColumnModel[];
    public commandColumns: LudiTableGridCommandColumn[];
    public trackByFn: Function;

    constructor(init?: Partial<LudiTableGridControlModel<T>>) {
        Object.assign(this, init);
    }
}


export class LudiTableGridColumnModel {
    public name: string;
    public displayName: string;
    public sortable: boolean = false;
    public visible: boolean = true;
    public sortingStatus: string | null = null;
    public columnQuery: string;

    constructor(init?: Partial<LudiTableGridColumnModel>) {
        Object.assign(this, init);
    }
}

export class LudiTableGridCommandColumn {
    public text: string;
    public onClick: (...args) => void;
    public visible: boolean = true;

    constructor(init?: Partial<LudiTableGridCommandColumn>) {
        Object.assign(this, init);
    }
}