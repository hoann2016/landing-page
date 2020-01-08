export interface PackageDataModel {
    id: number;
    status: string;
    name: string;
    price: number;
    booking_limit: number;
    renewal_limit: number;
    duration: number;
    bonus_duration: number;
}