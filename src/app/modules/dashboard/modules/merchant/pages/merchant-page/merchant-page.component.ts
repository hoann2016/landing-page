import { Component, OnInit } from '@angular/core';
import { LudiTableGridControlModel, LudiTableGridColumnModel } from './../../../../dashboard-shared/models/ludi-datatable/luditable-grid-control.model';
import { QUERY_CONSTANT } from './../../../../core/constants/query.constant';
import { orderBy } from 'lodash';

const DATA = [
    {
        id: 1,
        shop: 'Tuan Anh Store',
        package: 'Hulk 1',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },
    {
        id: 2,
        shop: 'Tuan Anh Store',
        package: 'Kulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },
    {
        id: 3,
        shop: 'Tuan Anh Store',
        package: 'Mulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-19',
        branch: 3,
        status: 'Disabled'
    },
    {
        id: 4,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },
    {
        id: 5,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 6,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 7,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 8,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 9,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 10,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 11,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 12,
        shop: 'Tuan Anh Store',
        package: 'Aulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 13,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 14,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 15,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 16,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 17,
        shop: 'Kim Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 18,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 19,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 20,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 21,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 22,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 23,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 24,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 25,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 26,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 27,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 28,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 29,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },{
        id: 30,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },
    {
        id: 31,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    },
    {
        id: 32,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    }
    ,{
        id: 33,
        shop: 'Tuan Anh Store',
        package: 'Hulk',
        username: "Tuan Anh",
        contact: '0979154156',
        date: '2020-04-18',
        branch: 3,
        status: 'Disabled'
    }
]

@Component({
    selector: 'app-merchant-page',
    templateUrl: './merchant-page.component.html',
    styleUrls: ['./merchant-page.component.scss']
})
export class MerchantPageComponent implements OnInit {
    public gridControl: LudiTableGridControlModel<any>;
    private searchObject: {[key: string]: any} = { page: QUERY_CONSTANT.PAGE, limit: QUERY_CONSTANT.LIMIT };
    public totalPage: number = 1;
    private listColumnQuerySorting: Array<string> = [];

    constructor(
    ) { }

    ngOnInit() {
        this.initGridControlForMerchant();
    }

    initGridControlForMerchant(): void {
        this.gridControl = new LudiTableGridControlModel({
            title: 'Khách hàng',
            data: this.trackingData(),
            trackByFn: this.trackByRender.bind(this),
            columns: [
                new LudiTableGridColumnModel({
                    name: 'id',
                    displayName: 'ID',
                    visible: true,
                    sortable: false
                }),
                new LudiTableGridColumnModel({
                    name: 'shop',
                    displayName: 'Shop',
                    visible: true,
                    sortable: false
                }),
                new LudiTableGridColumnModel({
                    name: 'package',
                    displayName: 'Gói dịch vụ',
                    visible: true,
                    sortable: true,
                    columnQuery: 'package',
                    css: { color: '#F4BE0F', fontWeight: '700' }
                }),
                new LudiTableGridColumnModel({
                    name: 'username',
                    displayName: 'Khách hàng',
                    visible: true,
                    sortable: false
                }),
                new LudiTableGridColumnModel({
                    name: 'contact',
                    displayName: 'Liên hệ',
                    visible: true,
                    sortable: false
                }),
                new LudiTableGridColumnModel({
                    name: 'date',
                    displayName: 'Ngày đăng ký',
                    visible: true,
                    sortable: true,
                    columnQuery: 'date'
                }),
                new LudiTableGridColumnModel({
                    name: 'branch',
                    displayName: 'Chi nhánh',
                    visible: true,
                    sortable: false
                }),
                new LudiTableGridColumnModel({
                    name: 'status',
                    displayName: 'Trạng thái',
                    visible: true,
                    sortable: false,
                    css: { color: '#5efc82' }
                }),
            ]
        });
        this.totalPage = Math.ceil(DATA.length / this.searchObject.limit);
        this.listColumnQuerySorting = this.gridControl.columns.map((item: LudiTableGridColumnModel) => item.sortable && item.columnQuery).filter(query => query && this.searchObject[query]);
    }

    trackingData(): Array<any> {
        const offset: number = ((this.searchObject.page || 1) * this.searchObject.limit) - this.searchObject.limit;
        const limit: number = ((this.searchObject.page || 1) * this.searchObject.limit)
        return DATA.slice(offset, limit);
    }

    eventSortingMerchant(event): void {
        this.searchObject = { ...this.searchObject, ...event };
        this.listColumnQuerySorting = this.gridControl.columns.map((item: LudiTableGridColumnModel) => item.sortable && item.columnQuery).filter(query => query && this.searchObject[query]);
        this.queryInListMerchant();
    }

    queryInListMerchant(): void {
        let query: Array<any> = DATA;
        const offset: number = ((this.searchObject.page || 1) * this.searchObject.limit) - this.searchObject.limit;
        const limit: number = ((this.searchObject.page || 1) * this.searchObject.limit)
        if (this.searchObject && this.searchObject.keyword) {
            query = query.filter((item: any) => {
                return item.shop.toLowerCase().indexOf(this.searchObject.keyword.toLowerCase()) > -1
            });
        }
        if (this.listColumnQuerySorting.length > 0) {
            query = orderBy(query, this.listColumnQuerySorting.filter((item: any) => this.searchObject[item]), this.listColumnQuerySorting.filter((item) => this.searchObject[item]).map((data: any) => this.searchObject[data].toLowerCase()));
        }
        query = query.slice(offset, limit);
        this.gridControl = { ...this.gridControl, data: query };
    }

    eventSearchingMerchant(event: string) {
        this.searchObject['keyword'] = event;
        this.queryInListMerchant();
    }

    trackByRender(index: number, item: any): any {
        return item.id;
    }

    eventPaging(event: any): void {
        this.searchObject = { ...this.searchObject, ...event };
        this.queryInListMerchant();
    }
}
