interface CheckoutUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    credentials: any;
}

interface CheckoutOrder {
    package_id: number;
    order_id: number;
    order_number: string;
    grand_totals: number;
}

export interface Order {
    id: number;
    order_number: string;
    merchant_id: number;
    currency_id: number;
    package_id: number;
    channel_id: number;
    sub_totals: number;
    tax: number;
    status: string;
    grand_totals: number;
    payment_method: string;
}

export interface Banks {
    code: string;
    name: string;
    logo: string;
}

export interface Payment {
    customer: CheckoutUser;
    selectedPackage: any;
    startDate: string;
    endDate: string;
    bankCode: string;
    paymentMethod: string;
    status: string;
    orderNumber: string;
    checksum: string;
}

export interface Checkout {
    order: CheckoutOrder;
    customer: any;
    bankCode: string;
    paymentMethod: string;
}

export interface CheckoutReponse {
    session: string;
    order_no: string;
    status: string;
    paymentMethod: string;
    checksum: string;
} 
