export interface UserLogedInModel{
    id:number;
    group_id:number;
    industry_id:number;
    country_id:number;
    name:string;
    store_name:string;
    phone:string;
    email:string;
    status:string;
    actived_at:string;
    created_at:string;
    modified_at:string;
    permissions:string[];
    iat:number;
    exp:number;
}