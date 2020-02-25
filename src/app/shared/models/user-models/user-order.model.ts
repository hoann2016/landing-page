export interface UserOrder{
    merchant_id:number;
    currency_id: number;
    package_id:number;
    channel_id:number;
    sub_totals:number;
    tax:number;
    grand_totals:number;
}